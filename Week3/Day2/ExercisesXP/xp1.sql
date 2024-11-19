---- EXERCISE 1 ----

-- 1. All items, ordered by price (lowest to highest)
SELECT *
FROM items
ORDER BY price DESC

-- 2. Item's with a price above 80, ordered by price (highest to lowest)
SELECT *
FROM items
WHERE price > 80
ORDER BY price ASC;

-- 3. The first 3 customers in alphabetical order of the first name 
--– exclude the primary key column from the results.
SELECT first_name, last_name
FROM customers
ORDER BY first_name 
LIMIT 3;

-- 4. All last names in reverse alphabetical order
SELECT last_name
FROM customers
ORDER BY last_name DESC;

