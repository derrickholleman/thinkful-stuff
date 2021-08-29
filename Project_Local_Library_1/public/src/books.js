//find()
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

//find()
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

const borrowedBooks = [];
const returnedBooks = [];

//helper function
function createBooksArray(books) {
  books.forEach((book) => {
    const bookReturned = book.borrows[0].returned;
    if (bookReturned === true) {
      returnedBooks.push(book);
    } else {
      borrowedBooks.push(book);
    }
    return bookReturned;
  });
}

function partitionBooksByBorrowedStatus(books) {
  createBooksArray(books);
  const allBooksArray = [borrowedBooks, returnedBooks];
  return allBooksArray;
}

// find
function getBorrowersForBook(book, accounts) {
  const borrowers = [];
  const bookBorrows = book.borrows;
  bookBorrows.forEach((book) => {
    const bookObject = accounts.find((account) => account.id === book.id);
    bookObject["returned"] = book.returned;
    borrowers.push(bookObject);
  });
  borrowers.length = 10;
  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
