// add up prices in the cart object and set the subtotal + shipping equal to total
let cart = [
    {
      itemName: "Walnut Guitar Mount",
      price: 62.0,
    },
    {
      itemName: "Wooden Guitar Pick Box",
      price: 8.5,
    },
    {
      itemName: "Mahogany Guitar Stand",
      price: 149.99,
    },
];

let subtotal = 0;
for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price
}

let shipping = 12.99;
let total = 0;

total += subtotal + shipping
console.log(total.toFixed(2))
  