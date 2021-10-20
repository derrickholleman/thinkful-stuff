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
    .then((welcomeMessage) => {
      return getFortune(question).then((response) =>
        [welcomeMessage].concat(response)
      );
    })
    .then((fortuneRes) => {
      return goodbye().then((goodbyeMessage) => {
        return fortuneRes.concat(goodbyeMessage);
      });
    })
    .catch((error) => `There was an error: ${error}`);
}
fullSession(question);

// done with async/await
async function getFortune(question) {
  try {
    const fortune = await tell(question);
    const fortuneRes = [
      `Your question was: ${question}`,
      `Your fortune is: ${fortune}`,
    ];
    return fortuneRes;
  } catch (err) {
    return `There was an error: ${err}`;
  }
}
async function fullSession(question) {
  try {
    const welcomeMessage = await welcome();
    const fortuneResponse = await getFortune(question);
    let resArray = [welcomeMessage].concat(fortuneResponse);
    const goodbyeMessage = await goodbye();
    return resArray.concat(goodbyeMessage);
  } catch (err) {
    return `There was an error: ${err}`;
  }
}

module.exports = { getFortune, fullSession };
