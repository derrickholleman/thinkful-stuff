exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("user_id").primary();
    table.string("name");
    table.integer("age");
    table.string("city");
    table.date("birthday");
    table.string("address");
    table.string("email");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
