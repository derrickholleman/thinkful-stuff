const parks = [
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  },
  {
    id: 2,
    name: "Canyonlands",
    areaInSquareKm: 1366.2,
    location: { state: "Utah" },
  },
  {
    id: 3,
    name: "Crater Lake",
    areaInSquareKm: 741.5,
    location: { state: "Oregon" },
  },
  {
    id: 4,
    name: "Lake Clark",
    areaInSquareKm: 10602,
    location: { state: "Alaska" },
  },
  {
    id: 5,
    name: "Kenai Fjords",
    areaInSquareKm: 2710,
    location: { state: "Alaska" },
  },
  {
    id: 6,
    name: "Zion",
    areaInSquareKm: 595.9,
    location: { state: "Utah" },
  },
];
const users = {
  "karah.branch3": {
    visited: [1],
    wishlist: [4, 6],
  },
  "dwayne.m55": {
    visited: [2, 5, 1],
    wishlist: [],
  },
  thiagostrong1: {
    visited: [5],
    wishlist: [6, 3, 2],
  },
  "don.kim1990": {
    visited: [6, 2, 3, 4],
    wishlist: [1],
  },
};

function getParksByState(parks, state) {
  return parks.filter((park) => park.location.state === state);
}
console.log(getParksByState(parks, "Utah"));
// ------------------------------------ //

function getWishlistParksForUser(parks, users, username) {
  return parks.filter((park) => users[username].wishlist.includes(park.id));
}
console.log(getWishlistParksForUser(parks, users, "karah.branch3"));
// ------------------------------------ //

function userHasVisitedAllParksInState(parks, users, state, username) {
  // filter parks by state
  return (
    parks
      .filter((park) => park.location.state === state)
      // check if user has visited all parks in the given state
      .every((park) => users[username].visited.includes(park.id))
  );
}
console.log(userHasVisitedAllParksInState(parks, users, "Utah", "don.kim1990"));
// ------------------------------------ //

function userHasVisitedParkOnWishlist(users, user1, user2) {
  return users[user1].visited.some((place) =>
    users[user2].wishlist.includes(place)
  );
}
console.log(
  userHasVisitedParkOnWishlist(users, "karah.branch3", "don.kim1990")
);
// ------------------------------------ //

function getUsersForUserWishlist(users, username) {
  const places = users[username].wishlist;
  const matchingUsers = [];
  
  for (const user in users) {
    if (users[user].visited.some((park) => places.includes(park))) {
      matchingUsers.push(user);
    }
  }
  return matchingUsers;
}
console.log(getUsersForUserWishlist(users, "thiagostrong1"));

// function getUsersForUserWishlist(users, user) {
//     let targetPlaces = users[user].wishlist
//     let foundUsers = []

//     for (let person in users) {
//         const user = users[person]
//         const visitedPlaces = user.visited

//         for (let i = 0; i < visitedPlaces.length; i++) {
//             if (targetPlaces.includes(visitedPlaces[i]) && foundUsers.includes(person) === false) {
//                 foundUsers.push(person)
//             }
//         }
//     }

//     return foundUsers
// }
// console.log(getUsersForUserWishlist(users, "thiagostrong1"))
