//53. Function that takes an array of numbers and returns a new array containing only the positive numbers.

function sumofPositiveNumbers(numbers){
    let sum = 0;
    for (let i=0; i<numbers.length; i++){
        if (numbers[i]>0){
            sum = sum+numbers[i];
        }
    }
    return sum;
}

const arrayofNumers = [1,2,3,4,5,-5, -10];
console.log (sumofPositiveNumbers(arrayofNumers));