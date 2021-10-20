let products = [
  {
    name: "Slip Dress",
    priceInCents: 8800,
    availableSizes: [0, 2, 4, 6, 10, 12, 16],
  },
  {
    name: "Fancy Hat",
    priceInCents: 8800,
    availableSizes: [0, 2, 4, 6, 10, 12, 16],
  },
  {
    name: "Fancy Shirt",
    priceInCents: 8800,
    availableSizes: [0, 2, 4, 6, 10, 12, 16],
  },
  {
    name: "Cool Jeans",
    priceInCents: 8800,
    availableSizes: [0, 2, 4, 6, 10, 12, 16],
  },
];

function listAllItems(products) {
    let items = []
    let message = 'There are no items for sale.'
    for (let i = 0; i < products.length; i++) {
        items.push(products[i].name)

        if (products.length === 1) {
            message = `There is 1 item for sale: ${items}.`
        } else if (products.length === 2) {
            message = `There are 2 items for sale: ${items.join(' and ')}.`
        } else if (products.length > 2) {
            message = `There are ${items.length} items for sale: ${items.join(', ')}.`
        }
    } 
    return message
}

console.log(listAllItems(products));
