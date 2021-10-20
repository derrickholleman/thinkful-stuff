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
  return parks.find((park) => park.name === name);
}
console.log(findParkByName(parks, "Zion"));
// ----------------------------------------------- //

function allParksAboveCertainSize(parks, minSize) {
  return parks.every((park) => park.areaInSquareKm > minSize);
}
console.log(allParksAboveCertainSize(parks, 500));
// ----------------------------------------------- //

function getBigParkNames(parks, minSize) {
  
  return (
    parks
      // filter by size
      .filter((park) => park.areaInSquareKm > minSize)
      // create an array of just the names
      .map((park) => park.name)
  );
}
console.log(getBigParkNames(parks, 500));

// ----------------------------------------------- //

function doesStateHaveOneBigPark(parks, minSize, state) {
  return parks
  // filter parks by size
    .filter((park) => park.areaInSquareKm > minSize)
    // test if any of the returned parks are located in specified state
    .some((park) => park.location.state === state);
}
console.log(doesStateHaveOneBigPark(parks, 700, "Oregon"));
