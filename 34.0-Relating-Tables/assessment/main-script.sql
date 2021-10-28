create table if not exists artists(
	artist_id serial primary key, 
	artist_name varchar(255),
	genre_name varchar(100)
)
select * from artists

create table if not exists songs(
	song_id serial primary key,
	song_name varchar(100) default 'no song title',
	album_name varchar(100) default 'no album title',
	artist integer references artists(artist_id) not null
)
select * from songs

create table if not exists concerts(
	concert_id serial primary key,
	concert_name varchar(255),
	concert_date date
)
select * from concerts

create table if not exists artists_concerts(
	artist_id integer references artists(artist_id),
	concert_id integer references concerts(concert_id),
	scheduled_start_at time,
	scheduled_end_at time,
	PRIMARY KEY (artist_id, concert_id) -- composite key
)
select * from artists_concerts
