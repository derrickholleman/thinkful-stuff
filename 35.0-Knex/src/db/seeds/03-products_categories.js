// npx knex seed:make 03-products_categories
const productsCategories = require("../fixtures/productsCategories");
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE products_categories RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("products_categories").insert(productsCategories);
    });
};
