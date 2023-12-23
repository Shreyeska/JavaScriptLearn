//4. Function that takes a number as input and checks if it is positive, negative, or zero. Return "Positive," "Negative," or "Zero" accordingly.

function CheckNum(num){
    if(num < 0){
        return 'The number is Negative';
    }
    else if (num > 0){
        return 'The number is Positive';
    }
    else{
        return 'The number is Zero';
    }
}

console.log(CheckNum(1));
console.log (CheckNum(-1));
console.log(CheckNum(0));
