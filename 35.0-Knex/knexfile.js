// create this file with npx knex init

require("dotenv").config(); // npm install dotenv
const { DATABASE_URL } = process.env;
const path = require('path') // path for migrations

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    }
  },
};

// create a connection.js file in db folder
