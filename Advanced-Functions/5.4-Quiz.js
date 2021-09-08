// find, filter, map, some, every quiz
const parks = [
  {
    name: "Canyonlands",
    areaInSquareKm: 1366.2,
    location: { state: "Utah" },
  },
  {
    name: "Crater Lake",
    areaInSquareKm: 741.5,
    location: { state: "Oregon" },
  },
  {
    name: "Zion",
    areaInSquareKm: 595.9,
    location: { state: "Utah" },
  },
];

function findParkByName(parks, name) {
    return parks.find((park) => park.name === name)
}
console.log(findParkByName(parks, "Zion"))
// ----------------------------------------------- //

function allParksAboveCertainSize(parks, minSize) {
  return parks.every((park) => park.areaInSquareKm > minSize)
}
console.log(allParksAboveCertainSize(parks, 500))
// ----------------------------------------------- //

function getBigParkNames(parks, minSize) {
  let result = []
  result = parks.filter((park) => park.areaInSquareKm > minSize)
  return result.map((park) => park.name)
}
console.log(getBigParkNames(parks, 500))

// ----------------------------------------------- //

function doesStateHaveOneBigPark(parks, minSize, state) {
  let result = []
  result = parks.filter((park) => park.location.state === state)
  return result.some((park) => park.areaInSquareKm >= minSize)
}
console.log(doesStateHaveOneBigPark(parks, 700, "Oregon"))


