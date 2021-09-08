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
  {
    name: "Mt Rainier",
    areaInSquareKm: 800.5,
    location: { state: "Oregon" },
  },
];
// object in the callback is the default starting point so it creates a new object
const result = parks.reduce((newObj, park) => {
  newObj[park.name] = park.areaInSquareKm;
  return newObj;
}, {});
console.log(result);

// add up areaInSquareKm for each index
function squareKmTotal(parks) {
  return parks.reduce(
    (total, park) => total + park.areaInSquareKm,
    0
  );
}
console.log(squareKmTotal(parks));
// -------------------------------------------- //

function parkNameAndState(parks) {
  return parks.reduce((acc, park) => {
    acc[park.name] = park.location.state;
    return acc;
  }, {});

}
console.log(parkNameAndState(parks));
// --------------------------------------------- //
