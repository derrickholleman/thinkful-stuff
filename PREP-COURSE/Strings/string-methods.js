let string = "Hello my name is Derrick";
let lowerCaseIntro = string.toLowerCase()
let stefString = string.replace('Derrick', 'Stef');
console.log(stefString)
console.log(lowerCaseIntro)
console.log(string) // original is not changed

console.log('')

// 1. remove the extra whitespace at the beginning and end of the string, and
// 2. capitalize all the letters
// Make sure to assign your answer to the 'trimAndCaps' variable
let trimAndCaps = "   I like to use methods!  ";
let newString = trimAndCaps.trim().toUpperCase();
console.log(newString)

let catBehavior = 'my cat came home to cocatenate'
let dogBehavior = catBehavior.replace('cat', 'dog')
console.log(dogBehavior)

console.log('')

const setSongTitle = (songTitle) => { 
    return songTitle.toLowerCase().replace("'",'')
}

console.log(setSongTitle("We're All Light"))