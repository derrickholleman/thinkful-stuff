-- src/get-all-books-by-author-by-genre.sql: Write a query to return a list of all book and author-related fields for all books written by "Leo Tolstoy" that belong to either the "autobiography" or "history" genres.
-- select * also works

select 
	b.book_id,
	b.title,
	b.publication_year,
	b.in_stock,
	a.author_id,
	a.author_name,
	a.nationality, 
	g.genre_id,
	g.genre_name
from 	
	authors a join books b 
on 
	a.author_id = b.author_id
	join books_genres bg 
on
	bg.book_id = b.book_id 
	join genres g 
on
	bg.genre_id = g.genre_id 
	and a.author_name = 'Leo Tolstoy'
where 	
	g.genre_name = 'autobiography'
	or g.genre_name = 'history'