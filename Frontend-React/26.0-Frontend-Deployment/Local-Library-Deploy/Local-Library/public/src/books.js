const findAuthorById = (authors, id) => {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const allBooks = []
  const returnedBooks = []
  const checkedOutBooks = []
  
  books.forEach((book) => {
    if (book.borrows[0].returned === false) {
      checkedOutBooks.push(book)
    } else {
      returnedBooks.push(book)
    }
  })
  
  allBooks.push(checkedOutBooks, returnedBooks)
  return allBooks
}

function getBorrowersForBook(book, accounts) {
  const borrowers = []

  book.borrows.forEach((user) => {
    accounts.filter((account) => {
      if (user.id === account.id) {

        account.returned = user.returned
        borrowers.push(account)
      }
    })
  })
  
  return borrowers.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
