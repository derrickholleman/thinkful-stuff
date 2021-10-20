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
    name: "A Random Pond",
    areaInSquareKm: 800.5,
    location: { state: "Oregon" },
  }
];

function parkByState(parks) {
  return parks.reduce((acc, park) => {
      console.log(acc)
    // if no array with key name, set it equal to an empty array.  since the accumulator is using park.location.state to set the key, it uses that value to find the object that should be included in its array
    if (acc[park.location.state] === undefined) {
      acc[park.location.state] = [];
    }

    // push the object to the respective array (whichever array causes the key to be made will be pushed to it)
    acc[park.location.state].push(park);
    return acc;
  }, {});
}
console.log(parkByState(parks));
