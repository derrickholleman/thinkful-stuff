exports.up = function (knex) {
    return knex.schema.table("observations", function (table) {
      table.decimal("air_temperature");
      table.string("unit", 1);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table("observations", function (table) {
      table.dropColumn("air_temperature");
      table.dropColumn("unit");
    });
  };
  
