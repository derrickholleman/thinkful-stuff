let product = {
  name: "Slip Dress",
  priceInCents: 8800,
  availableSizes: [0, 2, 4, 6, 10, 12, 16]
};

function getPriceInDollars(product) {
  return `$${(product.priceInCents / 100).toFixed(2)}`
}

function getProductHeading(product) {
  return `${product.name}: $${(product.priceInCents / 100).toFixed(2)} (Available in ${product.availableSizes.length} sizes!)`
}
console.log(getPriceInDollars(product));
