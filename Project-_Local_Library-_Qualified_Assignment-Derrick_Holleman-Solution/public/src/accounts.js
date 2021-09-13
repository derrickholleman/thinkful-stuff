function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((user1, user2) => user1.name.last > user2.name.last ? 1 : -1)
}

// helper function for getTotalNumberOfBorrows
function filterAndPushToArray(obj, arr, account) {
  obj.borrows.filter((userInfo) => {
    userInfo.id === account.id ? arr.push(userInfo.id) : null
  })

  return arr
}

function getTotalNumberOfBorrows(account, books) {
    let accounts = []

    books.forEach((book) => {
        accounts = filterAndPushToArray(book, accounts, account)
    })

    return accounts.length
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksInAccount = []
  
  books.forEach((book) => {
    let borrows = book.borrows[0]
    if (borrows.returned === false && borrows.id === account.id) {
      let {id, title, genre, authorId, author, borrows} = book
      
      author = authors.find((author) => author.id === book.authorId)
      
      booksInAccount.push({id, title, genre, authorId, author, borrows})
    }
  })
  
  return booksInAccount
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
