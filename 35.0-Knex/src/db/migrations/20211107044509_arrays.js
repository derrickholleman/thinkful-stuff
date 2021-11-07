exports.up = function (knex) {
  return knex.schema.createTable("arrays", (table) => {
    table.increments("array_id").primary();
    table.specificType("textArray", "text ARRAY");
    table.specificType("numArray", "integer ARRAY");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("arrays");
};
