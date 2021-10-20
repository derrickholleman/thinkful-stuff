const axios = require('axios')

// function totalPrice(id, quantity) {
//     return axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`).then((response) => {
//         const priceUSD = response.data[0].price_usd
//         return priceUSD * quantity
//     })
// }
// totalPrice(90, 5).then(console.log)

async function totalPrice(id, quantity) {
    const priceResponse = await axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`)
    const priceData = priceResponse.data[0].price_usd
    return priceData * quantity
}
totalPrice(90, 5).then(console.log)