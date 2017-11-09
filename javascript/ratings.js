const books = require('./books');

// books array is immutable, so a copy was created
let  booksCopy = (function(arr, sortFunction){
    return [...arr].sort(sortFunction);
  }(books, (a, b) => b.ratings - a.ratings));
  
//An IIFE that exposes two functions to get top authors and books 
let Ratings = (function(){
      
    return{

        getTopBooks(number){
          let topBooks = booksCopy.splice(0, number);
          return topBooks;
        },
        
        getTopAuthors(number){
          //created an objects array that contains authors and an array of their ratings.
          let topAuthorsRatings = booksCopy.reduce((authorObject, book) =>{
            if(book.author in authorObject)
            {
              authorObject[book.author].push(book.ratings);
            }
            else
            {
              authorObject[book.author] = [book.ratings];
            }
            
            return authorObject;
          }, {})
          
          //accumulator for computed author and average ratings object
          let topAuthorsAverageRatings = [];
          
          //loop to topAuthorsRatings object to compute average ratings
          for(prop in topAuthorsRatings)
          {
            let tempObj = {}
            tempObj[prop] =  topAuthorsRatings[prop].reduce((a, b) => a + b) / topAuthorsRatings[prop].length;
            topAuthorsAverageRatings.push(tempObj);
          }
          
          //sort average rating in a descending order.
          let sortedTopAuthorsAverageRatings = topAuthorsAverageRatings.sort((a, b) => Object.values(b) - Object.values(a));

          //return the requested numbers of top authors
          return sortedTopAuthorsAverageRatings.splice(0, number);
        }
    };
}());

//Ratings exported as a module.
module.exports = Ratings
  