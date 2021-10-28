-- Write a join query that will return a list of artists and their songs. Include all columns from both the artists and songs tables in your result.
select *
from 
	artists a join songs s 
on
	a.artist_id = s.artist 

-- Write a join query that will return a list of artists and their songs. Include only the artist id, artist name, and song name in your result.
select 
	a.artist_id,
	a.artist_name,
	s.song_name
from 
	artists a join songs s
on a.artist_id = s.artist 

-- Write a join query that will return a list of artists with song names that start with "The". Include only the artist name, song name and album name in your result.
select 
	a.artist_name,
	s.song_name,
	s.album_name
from
	artists a join songs s 
on a.artist_id = s.artist 
where s.song_name like 'The%'

-- Write a join query that will return all a list of artists and concerts they are performing at. Include only the artist name, concert name, concert date, and scheduled performance start and end times in your result.
select 
	a.artist_name,
	c.concert_name,
	c.concert_date,
	ac.scheduled_start_at,
	ac.scheduled_end_at
from 
	concerts c join artists_concerts ac 
	on c.concert_id = ac.concert_id 
	join artists a 
	on ac.artist_id = a.artist_id 