// Function that takes two arrays as input and returns a new array with the elements of both arrays combined

function combinearray (array1, array2){
    return array1.concat(array2);
}

const array1 = [10, 20, 30, 40, 50];
const array2 = [60, 70, 80, 90, 100];
const result = combinearray(array1, array2);
console.log(result);