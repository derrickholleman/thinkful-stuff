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

// how many candies to order in total this week? (takes in only arr parameter) if candies inStock is less than weeklyAverage you need to order weeklyAverage * 2 (return order object) if no candies in array, return empty object
function allCandyOrders(arr) {
    let allOrders = {}
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].inStock < arr[i].weeklyAverage) {
        allOrders[arr[i].candy] = arr[i].weeklyAverage * 2
      } else {
        allOrders[arr[i].candy] = 0
      }
    } return allOrders
}
console.log(allCandyOrders(inventory))
