const knex = require("../db/connection");

function list() {
  return knex("suppliers").select("*");
}

function create(supplier) {
  return knex("suppliers")
    .insert(supplier)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

// exports to controller
module.exports = {
  list,
  create,
};
