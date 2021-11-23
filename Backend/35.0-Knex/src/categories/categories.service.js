const knex = require("../db/connection");

// LIST
function list() {
  return knex("categories").select("*");
}

// READ
function read(category_id = 0) {
  return knex("categories").select("*").where({ category_id }).first()
}

// exports to controller
module.exports = {
  list,
  read
};
