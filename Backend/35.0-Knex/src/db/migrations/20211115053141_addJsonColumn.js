exports.up = function (knex) {
    return knex.schema.table("categories", (table) => {
      table.json("stats");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table("categories", (table) => {
      table.dropColumn("stats");
    });
  };