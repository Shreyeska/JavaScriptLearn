//16. Function that takes a number as input and prints a multiplication table for that number up to 10.
function multiplication (number){
    for(let i = 1; i <=  10; i++){
        console.log( number + ` * ` + i + ` = ` + number*i);
    }
}

multiplication(5);