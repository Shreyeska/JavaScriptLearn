//33. Function that takes an array of numbers as input and returns a new array with only unique values (no duplicates).

function removeDuplicates(array){
    const uniqueNumbersSet = new Set(array);
    const uniqueNumberArray = Array.from(uniqueNumbersSet); // Doesn't repeat any values from an array.
    return uniqueNumberArray;
}
const array = [10, 10, 10, 20 , 20, 30, 30, 40, 50, 60, 60];
const result = removeDuplicates(array);
console.log(result); // Output: [ 10, 20, 30, 40, 50, 60 ]