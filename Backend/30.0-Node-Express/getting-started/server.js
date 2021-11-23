// listen on PORT 5000 or whatever is specified in process.env
const { PORT = 5000 } = process.env
const app = require('./app')

const listener = () => console.log(`Listening on Port ${PORT}`)
app.listen(PORT, listener)