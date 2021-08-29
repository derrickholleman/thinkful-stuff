let directions = ["Remove the plastic wrapper", "Microwave 45 seconds", "Let cool", "Enjoy!"]

function printInstructions(steps) {  
  for (let i = 0; i < steps.length; i++) {
    console.log("Step " + ([i + 1]) + " - " + steps[i]);
  }
  return ''
}

console.log(printInstructions(directions))
