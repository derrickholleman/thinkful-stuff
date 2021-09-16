// try {
//   throw new Error("Something went wrong");
// } catch (error) {
//   console.log(`We handled the error: ${error}`);
// }

// function getRandomNumber() {
//   const randomNumber = Math.floor(Math.random() * 100);
//   const min = 10;
//   try {
//     if (randomNumber < min) {
//       throw `Random number is too small! ${randomNumber} is less than ${min}.`;
//     } else {
//       console.log(`The random number is: ${randomNumber}`);
//     }
//   } catch (error) {
//     console.log(`An error occurred: ${error}`);
//   }
// }
// getRandomNumber()

// try {
//   throw ["one", "two", "three"];
// } catch (error) {
//   const errors = error.join(", ");
//   console.log(`Multiple errors: ${errors}`);
// }
let car = { make: "Honda", model: "Civic", color: "Slate Grey" };
function getCarColor(car) {
  try {
    if (!car) {
      throw 'Color unknown'
    } else {
      return car.color;
    }
    
  } catch (error) {
    return error
  }
}
console.log(getCarColor(undefined));
