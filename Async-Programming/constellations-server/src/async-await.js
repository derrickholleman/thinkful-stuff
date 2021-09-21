const axios = require("axios");
const BASE_URL = "http://localhost:5000";

async function getConstellationNameById(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw `Constellation with id of ${id} could not be found.`;
  }
}

getConstellationNameById("n2OEOzp").then(console.log);

async function getFortune(question) {
  try {
    const response = await tell(question);
    console.log(`Your question was: ${question}`);
    console.log(`Your fortune is: ${response}`);
  } catch (err) {
    console.log(`There was an error: ${err}`);
  }
}

async function fullSession(question) {
  try {
    console.log(await welcome());
    await getFortune(question);
    console.log(await goodbye());
  } catch (err) {
    console.log(`There was an error: ${err}`);
  }
}
