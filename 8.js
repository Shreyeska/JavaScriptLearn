const { resourceUsage } = require("process");

//8. Function that takes a number as input and checks if it is even. If it's even, return "Even," otherwise return "Odd".
function OddorEven(number){
    if (number%2 == 0){
        return 'The number is Even.';
    }
    else{
        return 'The number is Odd.';
    }
}

console.log(OddorEven(4));//Output: The number is Even.
console.log(OddorEven(5));//Output: The number is Odd.
