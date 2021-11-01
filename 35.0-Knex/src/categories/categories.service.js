const knex = require("../db/connection");

// LIST
function list() {
  return knex("categories").select("*");
}

// exports to controller
module.exports = {
  list,
};
