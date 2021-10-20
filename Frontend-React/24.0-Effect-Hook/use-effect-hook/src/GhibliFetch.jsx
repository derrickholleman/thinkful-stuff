import React, { useState, useEffect } from "react";

const GhibliFetch = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const moviesResponse = await fetch(
          "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
        );
        const moviesJSON = await moviesResponse.json();
        setMovies([moviesJSON]);
      } catch (err) {
        return console.error(err);
      }
    }
    if (movies) {
      getMovies();
    }
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <p key={movie.id}>
          {movie.title} by {movie.director} was released in {movie.release_date}
        </p>
      ))}
    </div>
  );
};

export default GhibliFetch;
