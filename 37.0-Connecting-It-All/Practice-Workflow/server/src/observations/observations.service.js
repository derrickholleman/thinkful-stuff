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

function destroy(observation_id) {
  return knex("observations").select("*").where({ observation_id }).del();
}

module.exports = {
  list,
  create,
  delete: destroy
};
