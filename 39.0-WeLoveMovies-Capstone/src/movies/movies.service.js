const knex = require("../db/connection");

function list() {
  return knex("movies").select("*");
}

function listMoviesCurrentlyShowing() {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select("*")
    .where({ isShowing: true });
}

module.exports = {
  list,
  listMoviesCurrentlyShowing,
};
