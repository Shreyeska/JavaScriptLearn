//56. Function that checks if a given number is prime.

function isPrime(number){
    if (number !=1 &&  number != 0){
    for (let i= 2; i<number; i++){
        if( number%i === 0){
            return ('Not Prime');
        }
        else {
            return ('Prime');
        }
    }
   }
}

console.log(isPrime(7));