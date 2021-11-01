const env = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[env]; // exported from knexfile.js
const knex = require("knex")(config);

module.exports = knex;

// npx knex migrate:latest - executes exports.up
// npx knex migrate:rollback - executes exports.down
// npx knex migrate:list - gets list of completed/pending migrations
