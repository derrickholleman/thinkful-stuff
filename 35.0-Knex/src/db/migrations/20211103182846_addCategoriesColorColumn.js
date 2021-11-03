// add a new column
exports.up = function (knex) {
  return knex.schema.table("categories", (table) => {
    table.string("color");
  });
};

exports.down = function (knex) {
  return knex.schema.table("categories", (table) => {
    table.dropColumn("color");
  });
};