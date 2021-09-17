function caesar(input, shift, encode = true) {
  if (!shift || shift === 0 || shift < -25 || shift > 25) {
    return false;
  }
  let lowerCaseStr = input.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let encodedMessage = "";
  let newIndex;

  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currentLetter = lowerCaseStr[i];

    if (
      currentLetter === " " ||
      currentLetter === "!" ||
      currentLetter === "."
    ) {
      encodedMessage += currentLetter;
      continue;
    }

    let currentIndex = alphabet.indexOf(currentLetter);
    if (encode === true) {
      newIndex = currentIndex + shift;
    } else {
      newIndex = currentIndex - shift;
    }

    if (newIndex > 25) newIndex -= 26;
    if (newIndex < 0) newIndex += 26;
    encodedMessage += alphabet[newIndex];
  }
  return encodedMessage;
}

console.log(caesar("this is a secret message!", 8));

module.exports = caesar;
