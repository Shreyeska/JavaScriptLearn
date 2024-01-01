//36. Create an array of objects, each representing a book with properties: title, author, and year.
const bookArray=[
    {
        title: 'The Catcher in the Rye',
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
        author: 'George Orwell',
        year: 1949
    }
];
console.log (bookArray[0].title);
console.log(bookArray[2].author);

for (let i=0; i<3; i++){
    console.log (`${i+1}. Title: ${bookArray[i].title}`);
    console.log (`Author: ${bookArray[i].author}`);
    console.log (`Year: ${bookArray[i].year}`);
}