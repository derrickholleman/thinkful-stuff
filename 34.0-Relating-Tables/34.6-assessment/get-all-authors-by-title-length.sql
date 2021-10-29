-- src/get-all-authors-by-title-length.sql: Write a query to return a list of all authors who have written books whose titles are longer than 25 characters.

select 
	*
from 
	authors a join books b 
on 
	a.author_id = b.author_id 
where 
	length(b.title) > 25