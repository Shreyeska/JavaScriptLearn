//50. Function that takes a base and an exponent and returns the result of raising the base to the exponent.

function tothePower(base, exponent){
    let newNumber=1;
    for(let i=1; i<=exponent; i++){
        newNumber = newNumber *base;
    }
    return newNumber;
}

console.log(tothePower(2,6));