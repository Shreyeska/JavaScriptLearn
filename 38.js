//38. Function that takes an array of book objects as input and returns the total number of years (sum of years) for all books.

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

function sumofYears(books){
    let sum=0;
    for (let i=0; i<books.length; i++){
        sum=books[i].year+sum;
    }
    return sum;
}

console.log(`Sum of all the years mentioned in the books is ${sumofYears(bookArray)}`);