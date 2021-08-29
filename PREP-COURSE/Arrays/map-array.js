let names = ['Derrick', 'Stef', 'Kerwin']

function logNames(arr) {
    for (let i = 0; i < arr.length; i++) {
    return arr.map((name => 
        `Hello ${name}`
    ))}
}

console.log(logNames(names))