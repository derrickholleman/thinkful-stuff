const router = require("express").Router({ mergeParams: true });
const controller = require("./products.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);

router
  .route("/out-of-stock-count")
  .get(controller.listOutOfStockCount)
  .all(methodNotAllowed);

router
  .route("/list-price-summary")
  .get(controller.listPriceSummary)
  .all(methodNotAllowed);

router
  .route("/total-weight-by-product")
  .get(controller.totalWeightByProduct)
  .all(methodNotAllowed);

// check if productId route contains only numbers
router.route("/:productId([0-9]+)").get(controller.read).all(methodNotAllowed);

// get product and supplier info
router
  .route("/:productId/product-supplier")
  .get(controller.readProductAndSupplier)
  .all(methodNotAllowed);

module.exports = router;
