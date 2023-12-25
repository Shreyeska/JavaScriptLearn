//22. Program that iterates over an array of numbers and returns a new array with each number squared.

function arraySquare(numbers){
    for(let i=0; i<numbers.length; i++){
        console.log(numbers[i] * numbers[i]);
    }
}

const array = [2,3,4,9];
arraySquare(array);