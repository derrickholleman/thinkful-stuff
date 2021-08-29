let myDog = {
    name: 'Fido',
    legs: 4,
    tails: 1,
    friends: ['me', 'stef']
};

console.log(myDog)

for (const [key, value] of Object.entries(myDog)) {
    console.log(`${key}: ${value}`);
}