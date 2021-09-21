const axios = require("axios");
const BASE_URL = "http://localhost:5000";

const ids = ["KGQIwSq", "32TN5F8"];

function getConstellations(ids) {
  const promises = ids.map((id) => {
    const url = `${BASE_URL}/constellations/${id}`;
    return axios.get(url);
  });

  return Promise.all(promises);
}

getConstellations(ids)
  .then(console.log)
  .catch((err) => console.error(err));

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
