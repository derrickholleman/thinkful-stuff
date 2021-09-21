const axios = require("axios");

// async function getUsers() {
//   const response = await axios.get("https://randomuser.me/api/?results=5&nat=us")
//   const data = response.data
//   console.log(data.results.map((result) => {
//     let {name: {first, last}, location: {city}} = result
//     return personObj = {
//       name: `${first} ${last}`,
//       city: city
//     }
//   }))
// }
// getUsers();

// function getUsers() {
//   fetch("https://randomuser.me/api/?results=5&nat=us")
//   .then((response) => response.json())
//   .then((data) => console.log(data.results.map((person) => person)))
//   .catch((err) => console.error(err))
// }
// getUsers()

async function getPokeInfo() {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/squirtle")
        const data = response.data

        let allAbilities = data.abilities.map((ability) => 
        ability.ability.name)
        console.log(allAbilities)
    } catch (err) {
        console.error(err)
    }
}
getPokeInfo()

function getPokeInfo() {
    fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then((response) => response.json())
    .then((data) => console.log(data.moves.map((allMoves) => allMoves.move.name)))
    .catch((err) => console.error(err))
}
getPokeInfo()


