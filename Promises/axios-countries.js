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
  try {
    const url = "https://restcountries.eu/rest/v2/all";
    const res = await axios.get(url);
    const data = res.data;
    let africanCountries = data.filter((country) => country.region === "Africa").map((country) => {
        return countryObj = {
          name: country.name,
          region: country.region,
        };
      });
    let europeanCountries = data.filter((country) => country.region === "Europe").map((country) => {
        return countryObj = {
          name: country.name,
          region: country.region,
        };
      });
    console.log(africanCountries.slice(0, 5))
    console.log(europeanCountries.slice(0, 5))
  } catch (err) {
    console.error(err);
  }
}
getAllCountries();
