let strArr = ['Hello', 'Zed', 'Alpha', 'Mom']

function sortWords(words) {
    return words.sort((a, b) => a > b ? 1 : -1)
}
console.log(sortWords(strArr))
// --------------------------------------- //

let numArr = [56, -2, 3, 102]

function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b)
}
console.log(sortNumbers(numArr))
// --------------------------------------- //

function largestFirst(numbers) {
    return numbers.sort((a, b) => b - a)
}
console.log(largestFirst(numArr))
// --------------------------------------- //

const flowers = [
    {
      name: "Pink Coneflower",
      zone: 6
    },
    {
      name: "Scarlet Phlox",
      zone: 3
    },
    {
      name: "Carnations",
      zone: 4
    },
    {
      name: "Hyacinths",
      zone: 3
    },
    {
      name: "Hydrangeas",
      zone: 5
    }
]

function sortFlowersByZone(flowers) {
    return flowers.sort((a, b) => {          
           if (a.zone === b.zone) {
              // sorting by name is only important when zone is the same
              return a.name > b.name ? 1 : -1;
           }
           return a.zone - b.zone;
        });
}
console.log(sortFlowersByZone(flowers))
// --------------------------------------- //

const flowerNames = ["Scarlet Phlox", "Hyacinths", "Carnations", "Hydrangeas", "Pink Coneflower"]

function sortByLength(strings) {
    return strings.sort((a, b) => a.length - b.length)
}
console.log(sortByLength(flowerNames))
