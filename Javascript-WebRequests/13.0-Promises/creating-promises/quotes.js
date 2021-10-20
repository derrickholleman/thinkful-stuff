const readFile = require("./read-file");

const readFilePromise = readFile("c:\\Users\\derri\\Visual Studio Code\\Thinkful\\Promises\\creating-promises\\quotes.txt");

console.log(readFilePromise);

setTimeout(() => {
  console.log(readFilePromise);
}, 500);