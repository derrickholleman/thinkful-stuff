const productsService = require("./products.service");

function list(req, res, next) {
  productsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

function read(req, res, next) {
  const { product: data } = res.locals;
  res.json({ data });
}

// VALIDATION
function productExists(req, res, next) {
  const { productId } = req.params;
  productsService
    .read(productId)
    .then((product) => {
      if (product) {
        res.locals.product = product;
        return next();
      }
      next({
        status: 404,
        message: "Product cannot be found",
      });
    })
    .catch(next);
}

module.exports = {
  list,
  read: [productExists, read],
};
