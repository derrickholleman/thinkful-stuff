-- src/get-all-books-not-in-stock.sql: Write a query to return a list of all book and author-related fields for all books that are currently out of stock.

select 
	*
from 
	authors a join books b 
on
	a.author_id = b.author_id 
where 
	b.in_stock = false