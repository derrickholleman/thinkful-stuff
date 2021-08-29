salesObj = {
    name: "Washed Black Denim Overalls",
    priceInCents: 12000,
    availableSizes: [ 28, 30, 32, 36 ]
}

function createSalesProduct(product, salesTax) {
    return {
      ...product,
      salesTax,
      priceInCents: product.priceInCents * (1 + salesTax),
    };
}
console.log(createSalesProduct(salesObj, .065))

console.log('')

objectOfGames = {
  name: 'Zelda',
  price: 14.99,
  year: 2000
}

function createUsedGameListing(obj) {
  return {
    ...obj,
    price: obj.price - 10
  }
}
console.log(createUsedGameListing(objectOfGames))