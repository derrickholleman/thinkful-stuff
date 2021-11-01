const knex = require("../db/connection");

function list() {
  return knex("products").select("*");
}

function read(product_id) {
  return knex("products").select("*").where({ product_id }).first();
  // first() returns just the requested item
}

// exports to controller
module.exports = {
  list,
  read,
};
