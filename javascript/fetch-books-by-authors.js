const books = require('./books');

// fetch books by author
const fetchBooksByAuthor = (author) => {
    let result = books.filter(book => book.author === author);

    if(result.length === 0)
    {
        return 'No match found';
    }
    else
    {
        return result;
    }
};