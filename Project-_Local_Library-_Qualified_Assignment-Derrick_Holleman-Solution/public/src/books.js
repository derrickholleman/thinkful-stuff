function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
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
  
  // get all accounts that have checked out a specified book
  // return account object that has RETURNED status included
  
  // loop through book borrows
  book.borrows.forEach((user) => {
    // check for accounts that have checked out that book
    accounts.filter((account) => {
      // if id in books array matches an account id
      if (user.id === account.id) {
        // set returned status for account object
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
