// let foundElement = document.querySelectorAll('h2')
// for (let element of foundElement.values()) {
//     console.log(element.innerHTML)
// }

// let findRatings = document.querySelectorAll('.rating-display > div') 
// for (let element of findRatings.values()) {
//     console.log(element)
// }

// let getDescendant = document.querySelector('.stat > div')
// console.log(getDescendant)

// find all elements containing ratings
const ratings = document.querySelectorAll(".rating > .value");
console.log(ratings)

// find all elements containing stars that aren't shaded
const halfStars = document.querySelectorAll('.half')
console.log(halfStars)

// Write a statement that will find the entire Gateway Arch park element by it's id.
const gatewayArch = document.querySelector('#ganp')
console.log(gatewayArch)

// Write a statement that will find the element containing the established date for the Gateway Arch park
const established = document.querySelector('#ganp .established .value')
console.log(established)