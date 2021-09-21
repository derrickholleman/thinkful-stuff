const axios = require("axios");
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const ids = ["1", '20'];

function getConstellations(ids) {
  const promises = ids.map((id) => {
    const url = `${BASE_URL}/${id}`;
    return axios.get(url).then((res => {
        console.log(res.data.name)
        console.log(res.data.moves.map((move) => move).slice(0, 5))
    }))
  });

  return Promise.all(promises);
}

getConstellations(ids)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));