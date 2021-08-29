let scores = [10, 8, 5, 9, 10]

// accumulator with numbers
let result = 0;
for (let i = 0; i < scores.length; i++) {
    result += scores[i]
}
console.log(result)

// accumulator with array
let total = [];
for (let i = 0; i < scores.length; i++) {
    let score = scores[i]
    total.push(score)
}
console.log(total)


// accumulator with string
let colors = ["red", "white", "blue"];
let statement = "My favorite colors are ";

for (let i = 0; i < colors.length; i++) {
    if (i === colors.length - 1) {
        statement += "and " + colors[i] + '.'
    } else {
        statement += colors[i] + ', '
    }
}
console.log(statement)

function favoriteFood(food) {
    console.log("My favorite food is " + food)
}