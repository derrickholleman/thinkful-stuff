const products = [
  {
    name: "Black Longline T-Shirt",
    priceInCents: 8800,
    availableSizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    name: "Slip Dress",
    priceInCents: 8800,
    availableSizes: ["XS", "S", "M", "L", "XL"],
  },
];
// Update the function so that it assignes products[i] to a variable. Use that variable instead of calling products[i] multiple times.
function getProductsBySize(products, size) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    for (let j = 0; j < product.availableSizes.length; j++) {
      if (product.availableSizes[j] === size) {
        result.push(product);
      }
    }
  }

  return result;
}

console.log(getProductsBySize(products, 8));

// Update the function so that it does not explicilty return true or false.
function moreThanThreeProducts(products) {
  return products.length > 3;
}
console.log(moreThanThreeProducts(products));

// Update the function so that: products[i] is assigned to a variable. It returns false early if there is no product. It does not explicitly return true or false when checking for the size.

function checkForSizeByName(products, name, size) {
  let product = null;
  if (!products) {
    return false;
  }
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      product = products[i];
    }
  }

  if (product) {
    return product.availableSizes.includes(size);
  } else {
    return false;
  }
}
console.log(checkForSizeByName(products, "Slip Dress", "M"));
