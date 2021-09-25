const axios = require("axios");

const url = "http://localhost:5000/constellations";

function getAllNames() {
    axios.get(url)
    .then((response) => {
      let result = response.data.map((constellation) => constellation.name)
      console.log(result)
    })
    .catch((err) => console.error(err))
}
getAllNames()

// AXIOS GET REQUEST AND SORT DATA
// axios
//   .get(url)
//   .then((response) => {
//     let sortedConstellations = response.data.sort((a, b) =>
//       a.name > b.name ? 1 : -1
//     );
//     console.log(sortedConstellations);
//   })
//   .catch((err) => console.error(err));

// AXIOS GET WITH ASYNC AND AWAIT
// async function getConstellationInfo() {
//   try {
//     const res = await axios.get(url);
//     const data = await res.data;
//     let filteredData = data.filter(
//       (constellations) => constellations.starsWithPlanets > 20
//     );
//     console.log(filteredData);
//   } catch (err) {
//     return console.error(err);
//   }
// }
// getConstellationInfo();

// AXIOS POST REQUEST
// axios
//   .post(url, {
//       name: "Ara",
//       meaning: "Altar",
//       starsWithPlanets: 7,
//       quadrant: "SQ3"
//   }).then((response) => {
//       console.log(response.data)
//   })

// AXIOS DELETE REQUEST
// axios.delete(url/:id)
