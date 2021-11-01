const knex = require("../db/connection");

// LIST
function list() {
  return knex("products").select("*");
}

// READ
function read(product_id) {
  return knex("products").select("*").where({ product_id }).first();
  // first() returns just the requested item
}

// exports to controller
module.exports = {
  list,
  read,
};
