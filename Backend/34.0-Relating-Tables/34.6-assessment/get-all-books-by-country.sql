-- src/get-all-books-by-country.sql: Write a query to return a list of all book and author-related fields for all books written by an author from "China" or "Turkey".

select 
	*
from 
	authors a join books b 
on
	a.author_id = b.author_id 
where a.nationality = 'China' or a.nationality = 'Turkey'