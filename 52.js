//52. Function that takes an array of numbers and returns the sum of all the elements.

 function sumofArray (numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
 }

 const arrayofNumbers = [1,2,3,4,5];
 console.log (sumofArray(arrayofNumbers)); 