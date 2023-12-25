//24. Function that takes an array of numbers as input and returns the product of all the numbers.
function product(numbers){
    let mult=1;
    for(let i=0; i<numbers.length;i++){
        mult *= numbers[i];
    }
    return mult;
}

const array=[1,2,3,4,5];
console.log(product(array));