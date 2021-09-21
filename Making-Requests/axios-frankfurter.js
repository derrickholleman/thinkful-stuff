const axios = require('axios')

async function getRates(rates) {
    const url = `https://api.frankfurter.app/latest?from=${rates}`
    const response = await axios.get(url)
    const data = await response.data
    // return await data.rates
    console.log(data.rates)
}
getRates('USD')

// fetch 
// function getRates(rates) {
//     const url = `https://api.frankfurter.app/latest?from=${rates}`
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.rates))
//     .catch((err) => console.error(err))
// }
// getRates('USD')