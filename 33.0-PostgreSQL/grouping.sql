-- get all products from bakery department
SELECT product_name, aisle
FROM products
WHERE department = 'bakery'

-- all products in bakery and are in bakery desserts aisle
SELECT product_name, aisle, department
FROM products
WHERE department = 'bakery'
AND aisle = 'bakery desserts'

-- get aisles with no duplicates
SELECT DISTINCT aisle
FROM products  
order by aisle 

-- get unique occurences of a row, under an alias name
select count (distinct aisle) as total_aisles
from products
select count(distinct department) as total_departments
from products 

-- find tea recommendations
SELECT product_name, price
FROM products
WHERE department = 'beverages'
AND aisle = 'tea'

-- find teas in a price range 
SELECT product_name, price
FROM products
WHERE department = 'beverages'
AND aisle = 'tea'
AND price < 15
AND price > 10

-- find a tea name in the beverages department in a price range where tea name includes 'raspberry'
SELECT product_name, price
FROM products
WHERE department = 'beverages'
AND aisle = 'tea'
AND price < 15
AND price > 10
AND product_name LIKE '%Raspberry%'

-- order products in pet department by price (descending)
SELECT product_name, price
FROM products
WHERE department = 'pets'
ORDER BY price desc

-- get total amount of products in the pet department
SELECT count(*)
FROM products
WHERE department = 'pets'

-- get total number of occurences of each department
SELECT department, count(*)
FROM products
GROUP BY department

-- get sorted sum of all items in each department
SELECT department, sum(price)
FROM products
GROUP BY department
order by sum(price) desc

-- count how many products contain a certain string 
select count(*) 
filter (where product_name like '%Organic%')
from products

-- order each department by average price
select department, avg(price)
from products 
group by department
order by avg(price) desc