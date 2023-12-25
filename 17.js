//17. Function that takes an array of numbers as input and calculates the sum of all the numbers using a loop.

const { copyFileSync } = require("fs");

function sumofArray(numbers){
    let sum=0;
    for (let i=0; i<numbers.length; i++){
        sum +=numbers[i];
    }
    return sum;
}

const array = [1,2,3,4,5];
const result = sumofArray(array);
console.log(result);//Ouput: 15