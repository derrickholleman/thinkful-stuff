const knex = require("../db/connection");

const tableName = "restaurants as r";

function list() {
  return knex(tableName)
    .join("owners as o", "r.owner_id", "o.owner_id")
    .select("r.restaurant_name", "o.owner_name", "o.email")
    .orderBy("owner_name");
}

function listAverageRatingByOwner() {
  return knex(tableName)
  .join("owners as o", "r.owner_id", "o.owner_id")
  .select("o.owner_name")
  .avg("rating")
  .groupBy("owner_name")
  .orderBy("avg", "desc")
}

module.exports = {
  list,
  listAverageRatingByOwner,
};
