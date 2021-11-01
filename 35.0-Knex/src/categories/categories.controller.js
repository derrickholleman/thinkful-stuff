const categoriesService = require("./categories.service");

// LIST 
async function list(req, res, next) {
  categoriesService
    // list() imported from categoriesService
    .list()
    // .then() executes Knex query
    .then((data) => res.json({ data }))
    .catch(next);
}

module.exports = {
  list,
};
