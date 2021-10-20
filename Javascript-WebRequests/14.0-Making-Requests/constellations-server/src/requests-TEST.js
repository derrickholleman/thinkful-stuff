const axios = require("axios");

const BASE_URL = "http://localhost:5000/constellations";

function index() {
  axios
    .get(BASE_URL)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.error(err));
}

function create(body) {
  axios.post(BASE_URL, body).then((response) => {
    console.log(response.data);
  });
}

function show(id) {
  axios.get(`${BASE_URL}/${id}`).then((response) => {
    console.log(response.data);
  });
}

function update(id, body) {
  axios.put(`${BASE_URL}/${id}`, body).then((response) => {
    console.log(response.data);
  });
}

function destroy(id) {
  axios.delete(`${BASE_URL}/${id}`).then((response) => {
    console.log(response.data);
  });
}
