const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritics = mapProperties({
  // keys must match column names in table
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name"
});

function list() {
  return knex("movies").select("*");
}

function listMoviesCurrentlyShowing() {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .where({ "mt.is_showing": true });
}

function read(movie_id) {
  return knex("movies").select("*").where({ movie_id }).first();
}

function readMovieAndTheaters(movie_id) {
  return knex("movies as m")
    .select("t.*", "mt.*")
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .join("theaters as t", "mt.theater_id", "t.theater_id")
    .where({ "m.movie_id": movie_id });
}

function readMovieAndReviews(movie_id) {
  return knex("movies as m")
    .select("r.*", "c.*")
    .join("reviews as r", "m.movie_id", "r.movie_id")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .where({ "m.movie_id": movie_id })
    .first()
    .then(addCritics)
}

module.exports = {
  list,
  listMoviesCurrentlyShowing,
  read,
  readMovieAndTheaters,
  readMovieAndReviews
};
