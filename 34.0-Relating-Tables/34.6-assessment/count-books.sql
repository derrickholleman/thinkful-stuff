-- src/count-books.sql: Write a query to return the number of books "Leo Tolstoy" wrote.

select 
	count(*)
from 
	books b join authors a 
on 
	b.author_id = a.author_id 
where 
	a.author_name = 'Leo Tolstoy'

