//30. Function that takes an array of numbers as input and returns the average of those numbers.

function avgofarray(numbers){
    let avg = 0;
    let sum=0;
    for(let i= 0; i<numbers.length; i++){
        sum +=numbers[i];
    }
    return avg=sum/numbers.length;
}
const Arrayforaverage = [1,2,3,4,5];
console.log(avgofarray(Arrayforaverage));

