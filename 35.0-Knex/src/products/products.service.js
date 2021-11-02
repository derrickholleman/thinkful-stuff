const knex = require("../db/connection");

// LIST
function list() {
  return knex("products").select("*");
}

// READ
function read(product_id) {
  return knex("products").select("*").where({ product_id }).first();
  // first() returns just the requested item
}

// COUNT
function listOutOfStockCount() {
  return knex("products")
    .select("product_quantity_in_stock")
    .count("product_id")
    .where({ product_quantity_in_stock: 0 })
    .groupBy("product_quantity_in_stock")
    .first();
}

// PRICE SUMMARY
function listPriceSummary() {
  return knex("products")
    .select("supplier_id")
    .min("product_price")
    .max("product_price")
    .avg("product_price")
    .groupBy("supplier_id");
}

// TOTAL WEIGHT BY PRODUCT
function totalWeightByProduct() {
  return knex("products")
    .select(
      "product_id",
      "product_sku",
      "product_title",
      knex.raw(
        "sum(product_weight_in_lbs * product_quantity_in_stock) as total_weight_in_lbs"
      )
    )
    .groupBy("product_id", "product_sku", "product_title");
}

// exports to controller
module.exports = {
  list,
  read,
  listOutOfStockCount,
  listPriceSummary,
  totalWeightByProduct,
};
