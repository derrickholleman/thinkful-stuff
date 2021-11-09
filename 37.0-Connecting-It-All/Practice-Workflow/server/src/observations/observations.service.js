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

function update(observationId) {
  return knex("observations")
    .select("*")
    .update(observationId)
    .where({ observation_id: observationId.observation_id })
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
