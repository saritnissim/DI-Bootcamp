-- Exercise 1 : Items And Customers

-- Create a database called public.

-- CREATE DATABASE public;

-- Add two tables:
-- items
-- customers.
-- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80

-- create items table with fields: id, name, and price
CREATE TABLE items (
id SERIAL PRIMARY key,
name TEXT NOT NULL, 
price MONEY NOT NULL
);

--Add the following items to the table
INSERT INTO items (name, price) 
VALUES
    ('Small Desk', 100),
    ('Large Desk', 300),
    ('Fan', 80);

-- create customers table
CREATE TABLE customers (
id SERIAL PRIMARY KEY,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (100) NOT NULL
);

INSERT INTO customers (first_name, last_name) 
VALUES
    ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
    ('Trevor', 'Green'),
    ('Melanie', 'Johnson');
	
-- Use SQL to fetch the following data from the database:
-- All the items.
SELECT * FROM items;

-- All the items with a price above 80 (80 not included).
SELECT *
FROM items 
WHERE price::DECIMAL > 80;

-- All the items with a price below 300. (300 included)
SELECT *
FROM items
WHERE price::DECIMAL < 300;

-- All customers whose last name is ‘Smith’ (What will be your outcome?).
SELECT *
FROM customers
WHERE last_name = 'Smith';

-- All customers whose last name is ‘Jones’.
SELECT *
FROM customers
WHERE last_name = 'Jones';

-- All customers whose firstname is not ‘Scott’.
SELECT *
FROM customers
WHERE first_name <> 'Scott'