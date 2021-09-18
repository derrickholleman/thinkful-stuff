const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Will I ace my job interview?";

function getFortune(question) {
  return tell(question)
    .then((response) => {
      return [`Your question was: ${question}`, `Your fortune is: ${response}`];
    })
    .catch((error) => `There was an error: ${error}`);
}
getFortune(question)

function fullSession(question) {
    return welcome()
      .then((welcomeMessage) =>
      // this is the array from the previous question
        getFortune(question).then((response) => [welcomeMessage].concat(response))
      )
      .then((bye) => goodbye().then((goodbyeMessage) => bye.concat(goodbyeMessage)))
      .catch((error) => `There was an error: ${error}`);
};
fullSession(question)

module.exports = { getFortune, fullSession };
