const knex = require("../db/connection");

function list() {
  return knex("observations").select("*");
}

function create(observation) {
  return knex("observations")
    .insert(observation)
    .returning("*")
    .then((res) => res[0]);
}

module.exports = {
  list,
  create,
};
