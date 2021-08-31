const products = [
  {
    name: "Court Sneaker",
    priceInCents: 9800,
    availableSizes: [5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
  },
  {
    name: "Relaxed Silk Shirt",
    priceInCents: 9800,
    availableSizes: [0, 10, 12, 2],
  },
  {
    name: "Square-Neck Jumpsuit",
    priceInCents: 8800,
    availableSizes: [6, 10, 14, 2, 12],
  },
];

function chooseItemByNameAndSize(products, name, size) {
  for (let item in products) {
    const product = products[item];
    const prodName = product.name;
    const sizes = product.availableSizes;
    
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[i] === size && prodName === name) {
        return product;
      }
    }
  }
  return null;
}
console.log(chooseItemByNameAndSize(products, "Relaxed Silk Shirt", 10));

const cart = {
  "Court Sneaker": {
    priceInCents: 4500,
    quantity: 1,
  },
  "Fancy Dress": {
    priceInCents: 3000,
    quantity: 1,
  },
  "Soft Jeans": {
    priceInCents: 5000,
    quantity: 2,
  },
};
const product = {
  name: "Large Jeans",
  priceInCents: 8800,
};

function addProductToCart(product) {
  let newCart;
  const { name, priceInCents, quantity = 1 } = product;

  if (Object.keys(cart).length === 0) {
    return (newCart = {
      [name]: {
        priceInCents,
        quantity,
      },
    });
  }

  for (let item in cart) {
    const items = cart[item];
    const itemQuantity = items.quantity;

    for (let i = 0; i < Object.keys(cart).length; i++) {
      if (name === Object.keys(cart)[i]) {
        newCart = {
          ...cart,
          [name]: {
            priceInCents,
            quantity: itemQuantity + 1,
          },
        };
      } else {
        newCart = {
          ...cart,
          [name]: {
            priceInCents,
            quantity: 1,
          },
        };
      }
    }
  }

  return newCart;
}
console.log(addProductToCart(product));

function calculateTotal(cart) {
  let total = 0;
  for (let item in cart) {
    const items = cart[item];
    const totalPrice = items.priceInCents;
    const totalQuantity = items.quantity;

    total += totalPrice * totalQuantity;
  }

  return total;
}
console.log(calculateTotal(cart));
