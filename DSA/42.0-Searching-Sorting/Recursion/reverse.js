/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text) {
  return text.split("").reverse().join("");
}

module.exports = reverse;
