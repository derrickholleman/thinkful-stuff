const axios = require("axios");

async function getMovie() {
  try {
    const url = `https://ghibliapi.herokuapp.com/films`;
    const res = await axios.get(url);
    const data = await res.data;
    let result = data
      .map(({ title, description, director }) => {
        return (movieObj = {
          title: title,
          description: description,
          director: director,
        });
      })
      .slice(0, 5);
    console.log(result);
  } catch (err) {
    return console.error(err);
  }
}
getMovie();

function getMovie() {
  fetch(`https://ghibliapi.herokuapp.com/films`)
    .then((response) => response.json())
    .then((data) => {
      // make keys of movie name and values of movie info
      let allMovies = data.reduce((acc, movie) => {
        if (!acc[movie.title]) {
          acc[movie.title] = [];

          acc[movie.title].push(movie);
          return acc;
        }
      }, {});
      // return object of movie, director and movie info separately
      for (let movie in allMovies) {
        let movieObj = {
          movie: movie,
          director: allMovies[movie][0].director,
          movieInfo: allMovies[movie]
        }
        console.log(movieObj)
      }
    })
    .catch((err) => console.error(err));
}
getMovie();
