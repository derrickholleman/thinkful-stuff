const knex = require("../db/connection");

function list() {
  return knex('categories').select('*');
}

// exports to controller
module.exports = {
  list,
};
