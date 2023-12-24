// 3. Function that takes an array of numbers as input and returns the sum of all the numbers in the array.

function arrsum(numbers){
    let sum=0;
    for (let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
const sumArray = [10,20,30,40,50];
const add = arrsum(sumArray);
console.log (add);