const parks = [
  { name: "Biscayne", rating: 4.2 },
  { name: "Grand Canyon", rating: 5 },
  { name: "Gateway Arch", rating: 4.5 },
  { name: "Indiana Dunes", rating: 4.1 },
];

// FILTER. return all parks that start with letter G
function beginWithG(parks) {
    let result = parks.filter((park) => park.name.substring(0, 1) === 'G')
    return result
}
console.log(beginWithG(parks))

// MAP. format array to return park name next to string
function formattedString(parks) {
    let finalArr = parks.map((park) => `${park.name}: ${park.rating}`)
    return finalArr
}
console.log(formattedString(parks))

// SOME. check if "Grand Arches" is included in the array
function checkIfInArray(parks) {
    return parks.some((park) => park.name === "Grand Arches")
}
console.log(checkIfInArray(parks))

// EVERY. check if every park has a rating between 4 and 5.2
function checkIfInRange(parks) {
    return parks.every((park) => park.rating >= 4 && park.rating <= 5.2)
}
console.log(checkIfInRange(parks))
