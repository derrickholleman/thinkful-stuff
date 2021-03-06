const knex = require("../db/connection");

function list() {
  return knex("observations").select("*");
}

function read(observation_id) {
  return knex("observations").select("*").where({ observation_id }).first();
}

function create(observation) {
  return knex("observations")
    .insert(observation)
    .returning("*")
    .then((res) => res[0]);
}

function update(updatedObservation) {
  return knex("observations")
    .select("*")
    .where({ observation_id: updatedObservation.observation_id })
    .update(updatedObservation)
    .returning("*")
    .then((res) => res[0]);
}

function destroy(observation_id) {
  return knex("observations").select("*").where({ observation_id }).del();
}

module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy,
};
