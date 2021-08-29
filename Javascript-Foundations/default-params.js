const products = {
    name: "Slip Dress",
    priceInCents: 8800,
    availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
}

function getPriceInDollars(product = {}, {priceInCents = 0} = product) {
    return "$" + (priceInCents / 100).toFixed(2);
}
console.log(getPriceInDollars(products))

function checkIfSizeIsAvailable(product, size = false, {availableSizes = []} = product) {
    let sizes = availableSizes;
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[i] === size) {
        return true;
      }
    }
    return false;
}
console.log(checkIfSizeIsAvailable(products, 4))
// should return true if size specified
// should return false if one or both args are undefined