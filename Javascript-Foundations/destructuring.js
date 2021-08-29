const product = {
    title: "The Golden Compass",
    priceInCents: 799,
    author: {
      firstName: "Philip",
      surname: "Pullman",
    },
  };

// basic idea
function getAuthorAndTitle(obj) {
    const {author, title, priceInCents} = obj 
    return `${title} by ${author.firstName} ${author.surname} costs $${priceInCents / 100}`
}
console.log(getAuthorAndTitle(product))

// destructure further 
function getAuthorAndTitleAgain(obj) {
    const {
        author: {firstName, surname}, title, priceInCents
    } = obj 
    return `${title} by ${firstName} ${surname} costs $${priceInCents / 100}`
}
console.log(getAuthorAndTitleAgain(product))

const user = {
    name: 'Derrick Holleman',
    city: 'Minneapolis',
    favGames: ['Skyrim', 'Fallout', 'Cyberpunk 2077'],
    pets: {
        dog: 'Fido',
        cat: 'Siri'
    }
}
function getUserInfo(obj) {
    const {
        name, 
        city, 
        favGames, 
        pets : {dog, cat},
        } = obj
    return `My name is ${name}.  I live in ${city}.  My favorite video games are ${favGames.join(', ')}.  I have two pets: a dog named ${dog} and a cat named ${cat}.`
}
console.log(getUserInfo(user))



// DESTRUCTURING ARRAYS
const authors = [
    "Ursula K. Le Guin",
    "Brandon Sanderson",
    "Terry Pratchett",
    "Neil Gaiman",
    "J. R. R. Tolkien",
];
// get 1st, 2nd, 3rd values + rest operator, rest operator must be last
const [author1, author2, author3, ...otherAuthors] = authors
console.log(...otherAuthors)

let countries = ['Niger', 'Algeria', 'Ethiopia', 'Germany', 'France', 'Italy']
const [country1, country2, country3, ...EuropeanCountries] = countries
console.log(...EuropeanCountries)



