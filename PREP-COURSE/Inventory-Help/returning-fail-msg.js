const inventory = [
  {
    candy: "Twizzlers",
    inStock: 180,
    weeklyAverage: 200,
  },
  {
    candy: "Sour Patch Kids",
    inStock: 90,
    weeklyAverage: 100,
  },
  {
    candy: "Milk Duds",
    inStock: 300,
    weeklyAverage: 170,
  },
  {
    candy: "Now and Later",
    inStock: 150,
    weeklyAverage: 40,
  },
];

function candyInfo(inventory, candyName) {
    let newArr = [];
  
    if (inventory.length === 0) {
        return 'Inventory is empty'
    }
  
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].candy === candyName) {
            newArr.push(inventory[i])
        } 
    }

    return newArr.length > 0 ? newArr : 'Candy does not exist'
}
console.log(candyInfo(inventory, 'Milk Duds'));
