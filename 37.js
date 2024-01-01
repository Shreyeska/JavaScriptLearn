//37. Function that takes an array of book objects as input and returns an array with only the book titles.

function bookArray(books){
    const bookTitle = [];
    for (let i=0; i<books.length; i++){
        bookTitle.push (books[i].title);
     }
    return bookTitle;
}

const input = [
    {
        title: 'Catcher in the Rye',
        author: 'J.D. Salinger',
        year: 1951
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },
    {
        title: 1984,
        author: 'George Owell',
        year: 1949
    }
];

console.log (bookArray(input));