const { getTotalAccountsCount } = require("./home");

//find()
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

//sort()
function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => (a.name.last < b.name.last ? -1 : 1));
}

//map and ternary operator
function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  const borrowedBookArray = books.map((book) => book.borrows);
  borrowedBookArray.forEach((array) =>
    array.forEach((borrowedBook) => {
      return borrowedBook.id === account.id ? total++ : total;
    })
  );
  return total;
}

const newBookArray = [];

//helper function and find()
function createNewBookArray(account, books) {
  books.forEach((book) => {
    if (book.borrows.find((book) => book.id === account.id && book.returned === false)) {
      newBookArray.push(book);
    }
  });
  return newBookArray;
}

//find()
function getBooksPossessedByAccount(account, books, authors) {
  createNewBookArray(account, books);
  newBookArray.forEach((book) => {
    const newAuthorID = authors.find((author) => author.id === book.authorId);
    return (book["author"] = newAuthorID);
  });
  return newBookArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
