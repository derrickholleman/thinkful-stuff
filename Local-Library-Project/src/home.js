const authors = require("../data/authors.js");
const books = require("../data/books.js");
const accounts = require("../data/accounts.js");

function getTotalAccountsCount(accounts) {
  return accounts.reduce((acc, account) => {
    account ? (acc += 1) : null;
    return acc;
  }, 0);
}
console.log(getTotalAccountsCount(accounts));
// ----------------------------------- //

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    if (book.borrows[0].returned === false) {
      acc++;
    }
    return acc;
  }, 0);
}
console.log(getBooksBorrowedCount(books));
// ----------------------------------- //

function getMostCommonGenres(books) {
  // Accumulate genre's and transform each result into a new object with name and count keys
  const getGenres = books.reduce((acc, book) => {
    let { genre } = book;

    // if genre doesn't exist then set object name of genre and count to 0, else set genre.count += 1
    if (acc[genre] === undefined) {
      // set default object format
      acc[genre] = { name: `${genre}`, count: 1 };
    } else {
      acc[genre].count++;
    }

    return acc;
  }, {});

  // get object values so count is accessible
  const allGenres = Object.values(getGenres);

  // Sort genres
  allGenres.sort((a, b) => (a.count > b.count ? -1 : 1));

  // Return index from 0 to 5 of genres
  return allGenres.slice(0, 5);
}
console.log(getMostCommonGenres(books));
// ----------------------------------- //

function getMostPopularBooks(books) {
  // Map books to object with title and count of how many borrows
  const borrows = books.map((book) => {
    return popularBooks = {
      name: book.title,
      count: book.borrows.length
    }
  })

  // Sort new array of objects
  borrows.sort((a, b) => (a.count < b.count ? 1 : -1));

  // return specified length
  return borrows.slice(0, 5);
}
console.log(getMostPopularBooks(books));
// ----------------------------------- //

function getMostPopularAuthors(books, authors) {
  // reduce authors array to format object in correct format
  let allAuthors = authors.reduce((acc, author) => {
    const {
      id,
      name: { first, last },
    } = author;

    let authorDetails = { name: `${first} ${last}`, count: 0 };

    // filter books and check if book.authorId === id.  If so, add borrows length to count
    books.filter((book) =>
      book.authorId === id ? (authorDetails.count += book.borrows.length) : null
    );
    acc.push(authorDetails);

    return acc;
  }, []);

  // Sort popular authors from highest count to lowest
  allAuthors.sort((author1, author2) =>
    author1.count > author2.count ? -1 : 1
  );

  // Return index from 0 to 5 of popular authors
  return allAuthors.slice(0, 5);
}
console.log(getMostPopularAuthors(books, authors));
