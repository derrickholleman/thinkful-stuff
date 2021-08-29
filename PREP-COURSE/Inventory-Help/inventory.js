let inventory = [
    { candy: "Twizzlers", inStock: 180, weeklyAverage: 200 },
    { candy: "Sour Patch Kids", inStock: 90, weeklyAverage: 100 },
    { candy: "Milk Duds", inStock: 300, weeklyAverage: 170 },
    { candy: "Now and Laters", inStock: 150, weeklyAverage: 40 },
    { candy: "Skittles", inStock: 70, weeklyAverage: 80 },
    { candy: "Gummy worms", inStock: 20, weeklyAverage: 10 },
    { candy: "M&Ms", inStock: 300, weeklyAverage: 280 },
    { candy: "Starburst", inStock: 100, weeklyAverage: 40 },
    { candy: "Kit Kat", inStock: 20, weeklyAverage: 90 }
  ];

// how many candy types do we have (return number of objects)
function totalTypes(arr) {
    return arr.length
}
console.log(totalTypes(inventory))

console.log('')

// how many candies are in stock (return number)
function totalInStock(arr) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
      counter += arr[i].inStock
    }
    return counter
}
console.log(totalInStock(inventory))

console.log('')

// add a new candy to the inventory (arr and obj parameter) (return array)
function addCandyToInventory(arr, obj) {   
    arr.push(obj)
    return arr
}
console.log(addCandyToInventory(inventory, {
    candy: "Cookies",
    inStock: 200,
    weeklyAverage: 10,
}))

console.log('')

// should we order this candy (arr and str parameter) (return bool)
function shouldWeOrderThisCandy(arr, str) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].candy === str && arr[i].inStock < arr[i].weeklyAverage) {
        return true
      } 
    } return false
}
console.log(shouldWeOrderThisCandy(inventory, 'Kit Kat'))

// how much of specified candy should we order (arr and str parameter) (return number).  if inStock is less than weeklyAverage, order 2x the amount of weeklyAverage.  else order 0

function candyOrderQuantity(arr, str) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].candy === str && arr[i].inStock < arr[i].weeklyAverage) {
        return counter += arr[i].weeklyAverage * 2
      }
    } return 0
}
console.log(candyOrderQuantity(inventory, 'Sour Patch Kids'))
