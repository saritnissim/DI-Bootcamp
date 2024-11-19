---- EXERCISE 2 ----

-- 1. Select all columns from customer table
SELECT *
FROM customer;

-- 2. Display the names (first_name, last_name) using an alias named “full_name”.
SELECT CONCAT(first_name,' ',last_name) AS full_name
FROM customer;

-- 3. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT DISTINCT create_date
FROM customer;

-- 4. Write a query to get all the customer details from the customer table.
-- (It should be displayed in descending order by their first name.)
SELECT *
FROM customer
ORDER BY first_name DESC;

-- 5. Get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_id, title, description, release_year
FROM film
ORDER BY rental_rate ASC;

-- 6. Get the address, and the phone number of all customers living in the Texas district.
-- (these details can be found in the “address” table.)
SELECT address, address2, phone
FROM address
WHERE district = 'Texas';

-- 7. Retrieve all movie details where the movie id is either 15 or 150.
SELECT * FROM film 
WHERE film_id = 50 or film_id = 150;

-- 8. Write a query which should check if your favorite movie exists in the database. 
--Have your query get the film ID, title, description, length and the rental rate.
--(these details can be found in the “film” table.)
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'The Notebook';

-- 9. Write a query to get the film ID, title, description, length and the rental rate of 
--all the movies starting with the two first letters of your favorite movie.
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'Th%';

-- 10. Write a query which will find the 10 cheapest movies.
SELECT *
FROM film 
ORDER BY rental_rate ASC
LIMIT 10;

-- 11. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
-- [not sure how to do]

-- 12. Write a query which will join the data in the customer table and the payment table. 
-- You want to get the first name and last name from the curstomer table, 
-- as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT customer.customer_id AS customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date 
FROM customer
JOIN payment
ON payment.customer_id = customer.customer_id
ORDER BY customer_id;

-- 13. You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT *
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL;

-- 14. Write a query to find which city is in which country.
SELECT city, country
FROM city
JOIN country ON city.country_id = country.country_id 

-- 15. Bonus: You want to be able to see how your sellers have been doing?
--Write a query to get the customer’s id, names (first and last), the amount and the date of payment 
--ordered by the id of the staff member who sold them the dvd.
SELECT p.customer_id, s.first_name, s.last_name, p.amount, p.payment_date
FROM staff s
JOIN payment p
ON s.staff_id = p.staff_id
ORDER BY s.staff_id

