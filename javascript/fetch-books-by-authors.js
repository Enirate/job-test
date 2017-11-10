const books = require('./books');

// books is immutable, hence a copy.
const booksCopy = Array.from(books);

// fetch books by author
const fetchBooksByAuthor = (author) => {
    let result = booksCopy.filter(book => book.author === author);

    if(result.length === 0)
    {
        return 'No match found';
    }
    else
    {
        return result;
    }
};