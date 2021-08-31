const cart = {
        "Square-Neck Jumpsuit": {
          priceInCents: 8800,
          quantity: 1,
        },
        "Relaxed Silk Shirt": {
          priceInCents: 9800,
          quantity: 2,
        },
      };

function printReceipt(cart) {
  let message = "";
  let total = 0;

  for (let item in cart) {
    const items = cart[item];
    const totalQuantity = items.quantity;
    const price = items.priceInCents;

    const totalInCents = price * totalQuantity;
    const totalInDollars = (totalInCents / 100);

    total += totalInDollars;
    message += `${totalQuantity}x${item} - $${totalInDollars.toFixed(2)}\n`;
  }
  let finalMessage = `${message}Total: $${total.toFixed(2)}`;
  return total === 0 ? null : finalMessage;
}
console.log(printReceipt(cart));
