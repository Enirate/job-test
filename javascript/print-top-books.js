const Ratings = require('./ratings');

let printTopBooks = (function(){
    let topBooks = Ratings.getTopBooks(3); 
    return{
      getBooks(){
            let result = topBooks.reduce((topBooksArray, book) => {
                for(prop in book)
                {
                    let tempArray = [];
                    topBooksArray.push(book[prop]);
                }
                return topBooksArray;
            },[]);
            return result;
        }
    }
}());

module.exports = printTopBooks