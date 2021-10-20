function substitution(input, alphabet, encode = true) {

  // check if alphabet was entered and that it has the proper length
  if (!alphabet || alphabet.length !== 26) {
    return false;
  }
  // verify that the alphabet has no duplicate letters
  let verifyNoDuplicates = alphabet.split("").some((v, i, a) => {
    return a.lastIndexOf(v) != i;
  });
  if (verifyNoDuplicates === true) {
    return false;
  }

  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let word = input.toLowerCase();
  let result = "";

  for (let i = 0; i < word.length; i++) {
    let currentChar;
    let index;

    if (encode === true) {
      // currentChar is character at current index in for loop
      currentChar = word.charAt(i);
      // set index as the number of the current index
      index = alpha.indexOf(currentChar);
      // check for non alphabetical characters (they have index of -1)
      if (index === -1) {
        result += currentChar;
      } else {
        result += alphabet.charAt(index);
      }
    } else {
      currentChar = word.charAt(i);
      index = alphabet.indexOf(currentChar);
      if (index === -1) {
        result += currentChar;
      } else {
        result += alpha.charAt(index);
      }
    }
  }

  return result;
}
console.log(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"));

module.exports = { substitution };

// jrufscpw = thinkful
