const arrays = require("../fixtures/arrays");
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE arrays RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("arrays").insert(arrays);
    });
};