const authors = require("../data/authors.js");
const books = require("../data/books.js");
const accounts = require("../data/accounts.js");

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}
console.log(findAuthorById(authors, 2))
// ------------------------------------- //

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}
console.log(findBookById(books, "5f447132d487bd81da01e25e"))
// ------------------------------------- //

function partitionBooksByBorrowedStatus(books) {
  let allBooks = [];
  let returnedBooks = [];
  let checkedOutBooks = [];

  books.forEach((book) => {
    if (book.borrows[0].returned === true) {
      returnedBooks.push(book);
    } else {
      checkedOutBooks.push(book);
    }
  });
  allBooks.push(checkedOutBooks, returnedBooks);
  return allBooks;
}
console.log(partitionBooksByBorrowedStatus(books));
// ------------------------------------- //

function getBorrowersForBook(book, accounts) {
  const borrowers = [];

  // loop through borrows array
  book.borrows.forEach((userInfo) => {
    // filter accounts based on user id
    accounts.filter((user) => {
      if (userInfo.id === user.id) {
        // add and set returned status based on data in books
        user.returned = userInfo.returned;
        borrowers.push(user);
      }
    });
  });

  return borrowers.slice(0, 10);
}
console.log(getBorrowersForBook(books[0], accounts));
