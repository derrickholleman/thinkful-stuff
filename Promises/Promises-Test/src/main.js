const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Will I ace my job interview?";

function getFortune(question) {
  return tell(question)
    .then((response) => {
      return [`Your question was: ${question}`, `Your fortune is: ${response}`];
    })
    .catch((error) => `There was an error: ${error}`);
}
getFortune(question);

function fullSession(question) {
  return welcome()
    .then((welcomeMessage) =>
      // this is the array from the previous question
      //   getFortune(question).then((response) => [welcomeMessage].concat(response))
      tell(question).then((tellResponse) =>
        [welcomeMessage].concat(question, tellResponse)
      )
    )
    .then((fortuneRes) =>
      goodbye().then((goodbyeMessage) =>
        console.log(fortuneRes.concat(goodbyeMessage))
      )
    )
    .catch((error) => `There was an error: ${error}`);
}
fullSession(question);

// return new Promise
// get data from welcome, then take the data from welcome, combine it with the data from tell question and concat it together

module.exports = { getFortune, fullSession };
