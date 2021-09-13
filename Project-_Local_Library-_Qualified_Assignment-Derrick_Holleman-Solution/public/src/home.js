function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce((acc, account) => {
    account ? acc += 1 : null;
    return acc;
  }, 0);
}

function getBooksBorrowedCount(books) {
  
  return books.reduce((acc, book) => {
    if (book.borrows[0].returned === false) {
      acc++
    }
    return acc
  }, 0)
}

function getMostCommonGenres(books) {
  const getGenres = books.reduce((acc, book) => {
    let { genre } = book;


    if (acc[genre] === undefined) {
      acc[genre] = { name: `${genre}`, count: 1 };
    } else {
      acc[genre].count++;
    }

    return acc;
  }, {});

  const allGenres = Object.values(getGenres);

  allGenres.sort((genre1, genre2) => genre1.count < genre2.count ? 1 : -1);

  return allGenres.slice(0, 5);
}

function getMostPopularBooks(books) {
  const borrows = books.reduce((acc, book) => {
    let obj = {
      name: book.title,
      count: book.borrows.length
    }
    acc.push(obj)
    return acc
  }, [])

  borrows.sort((title1, title2) => title1.count < title2.count ? 1 : -1)

  return borrows.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  // reduce authors array to format object in correct format
  let allAuthors = authors.reduce((acc, author) => {
    const { id, name: {first, last} } = author;

    let authorDetails = { name: `${first} ${last}`, count: 0 };

    books.filter((book) =>
      book.authorId === id ? (authorDetails.count += book.borrows.length) : null
    );
    acc.push(authorDetails);

    return acc
  }, [])

  allAuthors.sort((author1, author2) =>
    author1.count > author2.count ? -1 : 1
  );

  return allAuthors.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
