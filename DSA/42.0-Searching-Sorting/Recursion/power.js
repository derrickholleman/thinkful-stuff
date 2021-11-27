/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */
function power(base, exponent) {
  if (exponent < 0) throw "exponent should be >= 0";

  if (base === 0) return 1;

  return Math.pow(base, exponent);
}

module.exports = power;
