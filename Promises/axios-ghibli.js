const axios = require('axios')

async function getMovie() {
    const url = `https://ghibliapi.herokuapp.com/films`
    const res = await axios.get(url)
    const data = await res.data
    let result = data.map(({title, description, director}) => {
        return movieObj = {
            title: title,
            description: description,
            director: director
        }
    }).slice(0, 5)
   console.log(result)
}
getMovie()
