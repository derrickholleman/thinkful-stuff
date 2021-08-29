function nameOfPerson(name) {
    return name
}

function greetPerson(greeting) {
    return greeting
}

function fullGreeting() {
    let name = nameOfPerson('Derrick')
    let greeting = greetPerson('Hello, ')
    return greeting + name
}
console.log(fullGreeting())


function addNums(a, b) {
    return a + b
}
function getTotal() {
    total = addNums(2, 4)
    return total
}
console.log(getTotal())