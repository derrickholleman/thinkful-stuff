function polybius(input, encode = true) {
  // check for odd number length of input
  if(!encode){

    charCount = 0;

    for (let char of input){
      if(char.charCodeAt() !== 32)
      charCount ++;
    }

    if(charCount % 2 !== 0){
      return false; 
    }
}

  // an object with key/value pairs of letters and their corresponding numbers to be used with the encoding process.
  const encoder = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };
  // an object with key/value pairs of numbers and their corresponding letters that will be used in the decoding process.
  const decoder = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  const direction = encode ? encoder : decoder;

  return (
    input.toLowerCase()
      // match for numbers, exactly 2 times, search thru a-z, preserve spaces, search globally
      .match(/[0-9]{2}|[a-z]|\s/g)
      .map((character) => direction[character] || character)
      .join("")
  );
}
console.log(polybius("good dog"));

module.exports = {polybius}
