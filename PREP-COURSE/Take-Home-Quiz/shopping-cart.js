const sampleCart = [
    {
      itemName: "Effective Programming Habits",
      type: "book",
      price: 13.99
    },
    {
      itemName: "Creation 3005",
      type: "computer",
      price: 299.99
    },
    {
      itemName: "Finding Your Center",
      type: "book",
      price: 15.00
    }
  ]
// Create a function named cartPrice to find the total cost of all the items in the shopping cart. (return number)
function cartPrice(arr) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        counter += arr[i].price
    } return counter
}
console.log(cartPrice(sampleCart))

// Create a function named mostExpensiveItemName to find the name of the highest priced item in the shopping cart ( return string).  return undefined for empty array
function mostExpensiveItemName(arr) {
    let sortedArr = arr.sort((a, b) => b.price > a.price ? 1 : -1)
    return arr.length > 0 ? sortedArr[0].itemName : undefined
}
console.log(mostExpensiveItemName(sampleCart))

// Create a function called priceLookup to find the price of a single item (return number) If there are no items that match the name passed in, your priceLookup function should return undefined.
// If there is more than one item in the array that matches the name, your function priceLookup should return the price of the first one that matches.
function priceLookup(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].itemName === item) {
            return arr[i].price
        }
    } return undefined
}
console.log(priceLookup(sampleCart, 'Creation 3005'))

// Create a function called priceFilter that returns all the items whose price is under a certain amount (return array of objects). If there are no items that have a price below the amount, your priceFilter function should return an empty array [].
function priceFilter(arr, num) {
    let priceMatch = [] 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price < num) {
            priceMatch.push(arr[i])
        }
    } return priceMatch.length > 0 ? priceMatch : []
}
console.log(priceFilter(sampleCart, 50))