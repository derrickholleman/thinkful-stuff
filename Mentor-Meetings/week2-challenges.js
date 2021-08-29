// take numbers out of a string and add them
function evaluate(str) {
    let string = str;
    let matches = string.match(/\d+/g);
    let numArray = []
    for (let i = 0; i < matches.length; i++) {
        numArray.push(Number(matches[i]))
    }
    return numArray.reduce((a, b) => a + b)
}

console.log(evaluate('What is 5 plus 13'))

function evaluate(str) {
    let string = str;
    let matches = string.match(/\d+/g);
    let numArray = []
    for (let i = 0; i < matches.length; i++) {
        numArray.push(Number(matches[i]))
    }
    if (numArray.length === 2) {
        return numArray.reduce((a, b) => a + b)
    } else {
        let firstHalf = numArray[0] + numArray[1]
        let secondHalf = firstHalf * numArray[2]
        return secondHalf
    }
}
console.log(evaluate('What is 3 plus 2 multiplied by 3'))
