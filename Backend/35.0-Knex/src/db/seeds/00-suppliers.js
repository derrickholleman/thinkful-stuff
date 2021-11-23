// npx knex seed:make 00-suppliers
const suppliers = require("../fixtures/suppliers");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("suppliers").insert(suppliers);
    });
};
