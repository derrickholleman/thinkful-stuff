function caesar(input, shift, encode = true) {
  if (!shift || shift === 0 || shift < -25 || shift > 25) {
    return false;
  }

  let lowerCaseStr = input.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let encodedMessage = "";
  let newIndex;

  // loop through input
  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currentLetter = lowerCaseStr[i];

    if (
      currentLetter === " " ||
      currentLetter === "!" ||
      currentLetter === "."
    ) {
      // add the non-letter character and skip the rest of the loop for that character
      encodedMessage += currentLetter;
      continue;
    }
    // set currentIndex variable equal to the letter that's at the current index of the currentLetter in the loop
    // if currentLetter is 'a', currentIndex would be 1
    let currentIndex = alphabet.indexOf(currentLetter);
    if (encode === true) {
      // then shift the current index over by shift amount and set it to newIndex
      newIndex = currentIndex + shift;
    } else {
      newIndex = currentIndex - shift;
    }

    // wraps back around if shift goes past a or z
    if (newIndex > 25) newIndex -= 26;
    if (newIndex < 0) newIndex += 26;

    // add letters onto encoded message based off of their numerical index in the alphabet array
    encodedMessage += alphabet[newIndex];
  }
  return encodedMessage;
}

console.log(caesar("hello.", 8));

module.exports = caesar;
