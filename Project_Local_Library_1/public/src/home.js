const { getBooksPossessedByAccount } = require("./accounts");

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

//ternary operator and map()
function getBooksBorrowedCount(books) {
  total = 0;
  const borrowedBook = books.map((book) => book.borrows);
  borrowedBook.forEach((array) =>
    array.forEach((borrowObj) =>
      borrowObj.returned === false ? total++ : total
    )
  );
  return total;
}

const countObj = {};

// helper function
function createCountObj(books) {
  books.forEach((book) => {
    if (countObj[book.genre] != null) {
      countObj[book.genre]++;
    } else {
      countObj[book.genre] = 1;
    }
  });
  return countObj;
}

//for/in loop and sort()
function getMostCommonGenres(books) {
  const countArray = [];
  let newObject = {};
  createCountObj(books);
  for (let item in countObj) {
    const genre = item;
    const counter = countObj[item];
    newObject = {
      name: genre,
      count: counter,
    };
    countArray.push(newObject);
  }
  countArray.sort((a, b) => b.count - a.count);
  countArray.length = 5;
  return countArray;
}

//reduce() and sort()
function getMostPopularBooks(books) {
  const borrows = books.reduce((acc, cur) => {
    let obj = {
      name: cur.title,
      count: cur.borrows.length,
    };
    acc.push(obj);
    return acc;
  }, []);
  borrows.sort((a, b) => (a.count < b.count ? 1 : -1));
  borrows.length = 5;
  return borrows;
}

//filter() and sort()
function getMostPopularAuthors(books, authors) {
  const authArray = [];
  authors.forEach((author) => {
    const byThisAuthor = books.filter((book) => book.authorId === author.id);
    let totalBorrows = 0;
    byThisAuthor.forEach((book) => (totalBorrows += book.borrows.length));
    authArray.push({
      name: author.name.first + " " + author.name.last,
      count: totalBorrows,
    });
  });
  authArray.sort((a, b) => (a.count < b.count ? 1 : -1));
  authArray.length = 5;
  return authArray;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
