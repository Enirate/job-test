const books = require('./books')

const print = result => console.log('Result:', result);

let filterBooksWithTitleStartingWithA = (sortedBooks) => {
  return new Promise((resolve, reject) => {
    let filteredBooks;
    /*filter logic*/
    resolve(filteredBooks);
    reject('Error');
  });
};

let sortBooksAlphabetically = (books) => {
  return new Promise((resolve, reject) => {
    let sortedBooks;
    /*sorting logic*/
    resolve(sortedBooks);
    reject('Error');
  })
};

setTimeout(() => {
  sortBooksAlphabetically(books)
  .then(sortedBooks => filterBooksWithTitleStartingWithA(sortedBooks))
  .then(filteredBooks => print(filteredBooks)) 
  .catch(err => console.log(err))
}, 2000);
