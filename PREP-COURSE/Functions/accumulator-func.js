let allOptions = ["option1", "option2", "option3", "option4"]

function showHelpOptions(options) {
    let statement = "Enter a keyword for help with a topic: ";
    for (let i = 0; i < options.length; i++) {
      if (i === options.length - 1) {
          // put a period after the last value in the array
          statement += options[i] + '.'
      } else {
          // put a comma in between other values
          statement += options[i] + ', '
      }
    }
    return statement
}

console.log(showHelpOptions(allOptions))

