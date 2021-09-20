const axios = require("axios");
const BASE_URL = "http://localhost:5000/constellations";

const leo = {
  name: "Tigger",
  meaning: "Tiger",
  starsWithPlanets: 19,
  quadrant: "NQ2",
};

// axios
//   .get(BASE_URL)
//   .then((response) => {
//     return response.data.find(({ name }) => name === leo.name);
//   })
//   .then((exists) => {
//     if (exists) throw `Constellation "${leo.name}" already exists.`;
//     return axios.post(BASE_URL, leo);
//   })
//   .then((response) => console.log(response.data))
//   .catch(console.log);

axios
  .get(BASE_URL)
  .then((response) => {
    return response.data.map(({ name }) => name === leo.name);
  })
  .then((response) => {
    if (response) throw "name already exists";
    axios.post(BASE_URL, leo);
  })
  .then((response) => console.log(response.data))
  .catch((err) => console.error(err));

// promise chaining test
function updateIfExists(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios
    .get(url)
    .then(() => {
      return axios.put(url, body);
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.message;
    });
}
