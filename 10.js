//10. Function that takes a number as input and returns "Fizz" if the number is divisible by 3, "Buzz" if it's divisible by 5, and "FizzBuzz" if it's divisible by both 3 and 5. Otherwise, return the number itself.



function divisibility (number){
    if (number%3==0 && number%5==0){
        return 'FizzBuzz';
    }
    else if (number%3==0){
        return 'Fizz';
    }
    else if (number%5==0){
        return 'Buzz';
    }
    else{
        return 'Invalid';
    }
}

console.log (divisibility(21));//Output: Fizz
console.log (divisibility(10));//Ouput: Buzz
console.log (divisibility(15));//Output: FizzBuzz
console.log (divisibility(23));//Output: Invalid
