
CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Julia', 'Roberts', '1967-10-28', 1);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Angelina', 'Jolie', '1975-06-04', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES 
    ('Tom', 'Hanks', '1956-07-09', 2),
    ('Brad', 'Pitt', '1963-12-18', 1),
    ('Scarlett', 'Johansson', '1984-11-22', 1);

-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

SELECT COUNT(*)
FROM actors;

INSERT INTO actors (first_name, last_name, age, number_oscars) 
VALUES ('John', 'Doe', NULL, NULL); -- will get error because it violates the constraint we set