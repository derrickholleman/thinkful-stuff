const productsService = require("./products.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// LIST
async function list(req, res, next) {
  const data = await productsService.list();
  res.json({ data });
}

// READ
async function read(req, res, next) {
  res.json({ data: res.locals.product });
}

// COUNT
async function listOutOfStockCount(req, res, next) {
  const data = await productsService.listOutOfStockCount();
  res.json({ data: data });
}

// PRICE SUMMARY
async function listPriceSummary(req, res, next) {
  const data = await productsService.listPriceSummary();
  res.json({ data: data });
}

// TOTAL WEIGHT BY PRODUCT
async function totalWeightByProduct(req, res, next) {
  const data = await productsService.totalWeightByProduct();
  res.json({ data: data });
}

// VALIDATION
async function productExists(req, res, next) {
  const { productId } = req.params;
  const product = await productsService.read(productId);

  if (product) {
    res.locals.product = product;
    return next();
  } else {
    next({
      status: 404,
      message: "Product cannot be found",
    });
  }
}
async function productExistsforProductSupplier(req, res, next) {
  const { productId } = req.params;
  const product = await productsService.readProductAndSupplier(productId);

  if (product) {
    res.locals.product = product;
    return next();
  } else {
    next({
      status: 404,
      message: "Product cannot be found",
    });
  }
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(productExists), asyncErrorBoundary(read)],
  listOutOfStockCount: asyncErrorBoundary(listOutOfStockCount),
  listPriceSummary: asyncErrorBoundary(listPriceSummary),
  totalWeightByProduct: asyncErrorBoundary(totalWeightByProduct),
  readProductAndSupplier: [
    asyncErrorBoundary(productExistsforProductSupplier),
    asyncErrorBoundary(read),
  ],
};
