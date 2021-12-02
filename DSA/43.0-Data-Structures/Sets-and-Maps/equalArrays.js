/**
 * return true if two arrays are equal, false otherwise
 */

function isEqual(a1, a2) {
  a1.sort();
  a2.sort();
  for (let i = 0; i < a1.length; i++) if (a1[i] != a2[i]) return false;
  return true;
}

module.exports = isEqual;
