const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCategory = mapProperties({
  // keys must match column names in table
  category_id: "category.category_id",
  category_name: "category.category_name",
  category_description: "category.category_description",
});

// LIST
function list() {
  return knex("products").select("*");
}

// READ PRODUCTS AND CATEGORIES
// join products_categories to products based on id match
// join categories to products_categories based on id match
// select all of products, all of categories where product_id = product_id in parameter
function read(product_id) {
  return knex("products as p")
    .join("products_categories as pc", "p.product_id", "pc.product_id")
    .join("categories as c", "pc.category_id", "c.category_id")
    .select("p.*", "c.*")
    .where({ "p.product_id": product_id })
    .first()
    .then(addCategory);
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
