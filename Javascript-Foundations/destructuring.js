const product = {
    title: "The Golden Compass",
    priceInCents: 799,
    author: {
      firstName: "Philip",
      surname: "Pullman",
    },
  };
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

const author = {
    name: {
      firstName: "Philip",
      surname: "Pullman",
    },
    birthday: "1946-10-19",
};
function displayAuthorData(obj) {
    const {
        name: {
            firstName, surname
        }, birthday
    } = obj
    return `${firstName} ${surname} was born on ${birthday}`
}
console.log(displayAuthorData(author))

// DESTRUCTURING ARRAYS
const authors = [
    "Ursula K. Le Guin",
    "Brandon Sanderson",
    "Terry Pratchett",
    "Neil Gaiman",
    "J. R. R. Tolkien",
];
// get 1st, 2nd, 3rd values + rest operator
const [author1, author2, author3, ...otherAuthors] = authors
console.log(...otherAuthors)



