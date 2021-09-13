const authors = require("../data/authors.js");
const books = require("../data/books.js");
const accounts = require("../data/accounts.js");

function getBooksBorrowedCount(books) {
  let counter = 0;
  books.forEach((book) => {
    if (book.borrows[0].returned === false) {
      counter++;
    }
  });

  return counter;
}
console.log(getBooksBorrowedCount(books))
// ----------------------------------- //