const axios = require("axios");
//Write your functions here

// async function getAllCountries() {
//   const url = `https://restcountries.eu/rest/v2/all`;
//   const result = await axios.get(url);
//   const data = result.data;
//   const countries = [];
//   data.map((country) => {
//     newCountry = {
//       name: country.name,
//       region: country.region,
//     };
//     countries.push(newCountry);
//     return countries;
//   });
  
//   let africanCountries = countries.filter(
//     (country) => country.region === "Africa"
//   );
//   console.log(africanCountries);
// }
// getAllCountries();

async function getAllCountries() {
  const url = 'https://restcountries.eu/rest/v2/all'
  const res = await axios.get(url)
  const data = res.data
  let result = data.map((country) => {
     return {
       name: country.name,
       region: country.region
     }
  })
  console.log(result);
}
getAllCountries()
