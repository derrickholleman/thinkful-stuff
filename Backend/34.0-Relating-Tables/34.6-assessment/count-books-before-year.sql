-- src/count-books-before-year.sql: Write a query to return the number of books written before 2000.

select 
	count(*)
from 
	books b 
where 
  b.publication_year < 2000