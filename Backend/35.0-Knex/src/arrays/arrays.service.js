const knex = require("../db/connection");

function list() {
  return knex("arrays").select("*");
}

function read(array_id) {
  return knex("arrays")
    .select("array_id", "textArray", "numArray")
    .where({ array_id })
    .first();
}

function create(array) {
  return knex("arrays")
    .insert(array)
    .returning("*")
    .then((res) => res[0]);
}

function destroy(array_id) {
  return knex("arrays").where({ array_id }).del();
}

module.exports = {
  list,
  read,
  create,
  delete: destroy,
};
