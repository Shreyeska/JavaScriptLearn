//26. Function that takes an array of numbers as input and returns a new array with only the even numbers.

function EvenArray(numbers){
    const even = [];
    for(let i=0; i< numbers.length; i++){
       if (numbers[i]%2 == 0){
        even.push(numbers[i]);
       }
    }
    return even;
}

const array = [1,2,3,4,5,6,8,9,10,21,22];
console.log(EvenArray(array));