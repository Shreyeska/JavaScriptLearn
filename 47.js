//47. Function to calculate the factorial of a given non-negative integer. The factorial of a non-negative integer `n` is the product of all positive integers less than or equal to `n`.

function factorial (number){
    let fact = 1;
    if (number === 0){
        return ('Invalid number');
    }
    else{
        for(let i=1; i<=number; i++){
            fact = fact*i;
        }
    }
    return fact;
}

console.log(factorial (5));