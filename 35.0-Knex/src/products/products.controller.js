const productsService = require("./products.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// LIST
async function list(req, res, next) {
  const data = await productsService.list()
  res.json({ data })
}

// READ
async function read(req, res, next) {
  res.json({ data: res.locals.product })
}

// VALIDATION
async function productExists(req, res, next) {
  const { productId } = req.params;
  const product = await productsService.read(productId)
  
  if (product) {
    res.locals.product = product
    return next()
  } else {
    next({
      status: 404,
      message: "Product cannot be found"
    })
  }
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(productExists), asyncErrorBoundary(read)],
};
