---- EXERCISE 1 ----
-- 1. Get a list of all the languages, from the language table.
SELECT name 
FROM language;

-- 2. Get a list of all films joined with their languages – select the following details : 
--film title, description, and language name.
SELECT f.title, f.description, l.name
FROM film f
JOIN language l ON f.language_id = l.language_id;

-- 3. Get all languages, even if there are no films in those languages 
-- select the following details : film title, description, and language name.
SELECT f.title, f.description, l.name
FROM language l
LEFT JOIN film f ON l.language_id = f.language_id;

-- 4. Create a new table called new_film with the following columns : id, name. 
-- Add some new films to the table.
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,  -- Auto-incrementing ID column
    name VARCHAR(255) NOT NULL  -- Name column for the film
);
INSERT INTO new_film (name)
VALUES
    ('The Dark Knight'),
    ('The Shawshank Redemption'),
    ('Pulp Fiction'),
    ('The Godfather'),
    ('Forrest Gump');

-- 5. Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review (
	review_id SERIAL PRIMARY KEY NOT NULL,
	film_id INT NOT NULL,
	language_id INT NOT NULL, 
	title VARCHAR(255) NOT NULL, 
	score INT CHECK (score >= 1 AND score <= 10), 
	review_text TEXT, 
	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

	FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
	FOREIGN KEY (language_id) REFERENCES language(language_id)
);

-- 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- Insert the first movie review
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
    (1, 1, 'Epic Storytelling', 9, 'The Dark Knight is one of the best superhero movies ever made.');

-- Insert the second movie review
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
    (2, 1, 'A Classic Tale of Hope', 10, 'Shawshank is a timeless classic that shows the power of hope and friendship. Tim Robbins and Morgan Freeman give stellar performances.');


-- 7. Delete a film that has a review from the new_film table, what happens to the customer_review table?
SELECT * FROM customer_review

DELETE FROM new_film
WHERE id = 1;


---- EXERCISE 2 ----

-- 1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
SELECT * FROM film

UPDATE film
SET language_id = 2  
WHERE film_id = 1;

-- 2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
SELECT *
FROM customer
-- The values for store_id and address_id must correspond to valid entries in the store and address tables. If the foreign key values do not exist in the parent tables, the INSERT operation will fail.

-- 3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review -- easy step

-- 4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL

-- 5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
ORDER BY f.rental_rate DESC
LIMIT 30;

-- 6. Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- a. The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT f.title
FROM film f 
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON a.actor_id = fa.actor_id
WHERE a.first_name = 'Penelope' 
AND a.last_name = 'Monroe'
AND f.description LIKE '%Sumo Wrestler%'

-- b. The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT f.title 
FROM film f
WHERE f.rating = 'R' 
AND f.length < 60
AND f.description LIKE '%Documentary%'

-- c. The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
--and he returned it between the 28th of July and the 1st of August, 2005.
SELECT f.title 
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON f.film_id = i.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND f.rental_rate > 4.00 
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- The 4th film : His friend Matthew Mahan watched this film, as well. 
--It had the word “boat” in the title or description, 
--and it looked like it was a very expensive DVD to replace.
SELECT f.title
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON f.film_id = i.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND (f.title LIKE '%Boat%' OR f.description LIKE '%Boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;