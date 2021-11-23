// npx knex seed:make 02-categories
const categories = require("../fixtures/categories");
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE categories RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("categories").insert(categories);
    });
};
