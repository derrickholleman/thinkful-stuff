exports.up = function (knex) {
  return knex.schema.createTable("arrays", (table) => {
    table.increments("array_id").primary();
    // makes an array where strings are allowed
    table.specificType("textArray", "text ARRAY");
    // makes an array where integers are allowed
    table.specificType("numArray", "integer ARRAY");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("arrays");
};
