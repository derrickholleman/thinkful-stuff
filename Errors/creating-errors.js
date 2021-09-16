// let secret = 42;
// let guess = 55;

// if (guess !== secret) {
//   throw new Error("That's not the secret number!");
// }

// when to create errors 
function checkSecretPassword(password) {
    if (!password) throw "No password given!";
    return password === "SECRET";
}
console.log(checkSecretPassword(''))