const { first } = require("lodash");
const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

// LODASH for mapping objects
const addCategory = mapProperties({
  // keys must match column names in table
  category_id: "category.category_id",
  category_name: "category.category_name",
  category_description: "category.category_description",
});
const addSupplier = mapProperties({
  supplier_id: "supplier.supplier_id",
  supplier_name: "supplier.supplier_name",
  supplier_address_line_1: "supplier.supplier_address_line_1",
  supplier_address_line_2: "supplier.supplier_address_line_2",
  supplier_state: "supplier.supplier_state",
  supplier_zip: "supplier.supplier_zip",
  supplier_city: "supplier.supplier_city",
  supplier_phone: "supplier.supplier_phone",
  supplier_email: "supplier.supplier_email",
  supplier_notes: "supplier.supplier_notes",
  supplier_type_of_goods: "supplier.supplier_type_of_goods",
});

// LIST
function list() {
  return knex("products").select("*");
}

// READ PRODUCTS AND CATEGORIES AND SUPPLIERS
// join products and suppliers based on supplier_id
// join products_categories to products based on product_id
// join categories to products_categories based on category_id match
// select all of products, all of categories where product_id = product_id in parameter
function read(product_id) {
  return knex("products as p")
    .join("suppliers as s", "s.supplier_id", "p.supplier_id")
    .join("products_categories as pc", "p.product_id", "pc.product_id")
    .join("categories as c", "pc.category_id", "c.category_id")
    .select("p.*", "c.*", "s.*")
    .where({ "p.product_id": product_id })
    .first()
    .then(addSupplier)
    .then(addCategory);
}

// READ PRODUCTS AND CORRESPONDING SUPPLIER
// EXAMPLE OF JOINING 2 TABLES
function readProductAndSupplier(product_id) {
  return knex("products as p")
    .join("suppliers as s", "p.supplier_id", "s.supplier_id")
    .select("p.*", "s.*")
    .where({ "p.product_id": product_id })
    .first()
    .then(addSupplier);
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
  readProductAndSupplier,
};
