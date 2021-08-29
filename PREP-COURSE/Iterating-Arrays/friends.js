let myFriends = ['Jenny', 'Noor', 'Alicia', 'Johnny', 'Katie']

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i] + ' likes to party!')
}

// mutate all names in array to be uppercase
for (let i = 0; i < myFriends.length; i++) {
    myFriends[i] = myFriends[i].toUpperCase()
}
console.log(myFriends)

// iterate through an array and push values into new array
let myFriends1 = ['Derrick', 'Julie', 'Darryl', 'Stef', 'Kerwin']

let newFriends = []
for (let i = 0; i < myFriends1.length; i++) {
    newFriends.push(myFriends1[i])
}
console.log(newFriends)