const authors = require("../data/authors.js");
const books = require("../data/books.js");
const accounts = require("../data/accounts.js");

// function findAccountById(accounts, id) {
//   return accounts.find((account) => account.id === id)
// }
// console.log(findAccountById(accounts, "5f446f2ecfaf0310387c9603"))
// -------------------------------------- //

// function sortAccountsByLastName(accounts) {
//   return accounts.sort((a, b) => a.name.last > b.name.last ? 1 : -1)
// }
// console.log(sortAccountsByLastName(accounts))

// -------------------------------------- //

// function getTotalNumberOfBorrows(account, books) {
//     let accounts = []

//     books.forEach((book) => {
//         book.borrows.filter((userInfo) => {
//             userInfo.id === account.id ? accounts.push(userInfo.id) : null
//         })
//     })

//     return accounts.length
// }
// console.log(getTotalNumberOfBorrows(accounts[56], books))
// -------------------------------------- //

function getBooksPossessedByAccount(account, books, authors) {
  // create empty array for books
  const booksCheckedOut = [];

  // loop through books
  books.forEach((book) => {
    // set borrows to most recently checked out
    let borrows = book.borrows[0];

    // check if borrows id is currently checked out by an account id
    if (borrows.returned === false && borrows.id === account.id) {
      // destructure books
      let { id, title, genre, authorId, author, borrows } = book;

      // get author data to put in object
      author = authors.find((author) => author.id === book.authorId);

      // push data into array
      booksCheckedOut.push({ id, title, genre, authorId, author, borrows });
    }
  });
  return booksCheckedOut
}
console.log(getBooksPossessedByAccount(accounts[8], books, authors));
