const cart = {
    "Canvas Tote Bag": { quantity: 2, priceInCents: 1800 },
    "Black and White Chuck On Dress": { quantity: 1, priceInCents: 4400 },
    "Natural Straw Wide Brim Hat": { quantity: 1, priceInCents: 2250 },
    "Blue Stripe Casual Shirt": { quantity: 3, priceInCents: 2000 },
  };
  
// make sure items with multiple quantities get the appropriate amount
function calculateCartTotal(cart) {
    let result = 0
    for (let item in cart) {
      const items = cart[item]
      const totalPrice = items.priceInCents * items.quantity
      result += totalPrice
    }
    return result
}
console.log(calculateCartTotal(cart))
// make it so the console displays quantity and items like - 2xCanvas Tote Bag1xBlack and White Chuck On Dress1xNatural Straw Wide Brim Hat3xBlue Stripe Casual Shirt
function printCartInventory(cart) {
    let message = ''
    for (let item in cart) {
        // let each item equal key
        const items = cart[item]
        // let quantity equal each items quantity value
        const quantity = items.quantity
        message += `${quantity}x${item}\n`
    }
    return message
}
console.log(printCartInventory(cart))