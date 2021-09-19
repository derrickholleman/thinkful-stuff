const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Will I ace my job interview?";

function getFortune(question) {
  return tell(question)
    .then((response) => {
      return [`Your question was: ${question}`, `Your fortune is: ${response}`];
    })
    .catch((err) => {
      return `There was an error: ${err}`;
    });
}

function fullSession(question) {
    return welcome()
    .then((welcomeMessage) => {
        return getFortune(question).then((fortuneResponse) => {
            return [welcomeMessage].concat(fortuneResponse)
        })
    })
    .then((fortuneResponse) => {
        return goodbye().then((goodbyeMessage) => {
            return fortuneResponse.concat(goodbyeMessage)
        })
    })
    .catch((err) => `There was an error: ${err}`)
}
fullSession(question);
