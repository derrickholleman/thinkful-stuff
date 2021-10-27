 create table if not exists artists (
 	artist_id serial primary key,
 	artist_name varchar not null unique,
 	birthday date not null,
 	birthplace varchar not null,
 	is_alive boolean not null default 'true' 
 )