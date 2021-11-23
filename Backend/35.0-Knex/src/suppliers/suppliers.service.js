const knex = require("../db/connection");

// LIST
function list() {
  return knex("suppliers").select("*");
}

// CREATE
function create(supplier) {
  return knex("suppliers")
    .insert(supplier)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

// READ
function read(supplier_id) {
  return knex("suppliers").select("*").where({ supplier_id }).first();
}

// UPDATE
function update(updatedSupplier) {
  return knex("suppliers")
    .select("*")
    .where({ supplier_id: updatedSupplier.supplier_id })
    .update(updatedSupplier, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

// DESTROY
function destroy(supplier_id) {
  return knex("suppliers").where({ supplier_id }).del();
}

// exports to controller
module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy
};
