//7. Function that takes a number as input and checks if it is divisible by both 3 and 5. Return true if it is, false otherwise.

function divisiblity(number){
    return number%3==0 && number % 5 == 0;
}

console.log(divisiblity(21));//Output: false
console.log(divisiblity(15));//Output: true