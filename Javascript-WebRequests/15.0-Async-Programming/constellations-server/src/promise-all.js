const axios = require("axios");
const BASE_URL = "http://localhost:5000";

const ids = ["KGQIwSq", "32TN5F8"];

function getConstellations(ids) {
  return Promise.all(ids.map((id) => {
    const url = `${BASE_URL}/constellations/${id}`;
    return axios.get(url).then(() => {
      // returns input value in an object
      return {id}
    })
  }));
}

getConstellations(ids)
  .then(console.log)
  .catch((err) => console.error(err));

  // TEST NOTES
  // return Promise.all, map ids to their respective url. then axios.delete and return the response as {id}

// Promise.all test
// function bulkDelete(ids) {
//   const promises = ids.map((id) => {
//     const url = `${BASE_URL}/constellations/${id}`;
//     return axios.delete(url).then((response) => {
//       return { id };
//     });
//   });
//   return Promise.all(promises);
// }
