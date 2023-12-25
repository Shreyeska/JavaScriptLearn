const { resourceUsage } = require("process");

//13. Function that takes three numbers as input and returns the largest of the three without using the built-in `Math.max()` method.
function largest(num1, num2, num3){
    if (num1 > num2  && num1 > num3){
        return num1 + ' is the Largest.';
    }
    else if (num2 > num1 && num2 > num3){
        return num2 + ' is the Largest.'
    }
    else 
    return num3 + ' is the Largest.'
}

console.log( largest(4,5,6));// Output: 6 is the Largest.