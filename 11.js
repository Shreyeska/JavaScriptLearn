//11. Function that takes a year as input and checks if it's a leap year. Return true if it's a leap year, false otherwise.

function leapcheck(year){
    return year%4==0;
}

console.log (leapcheck(2020));//Output: true
console.log (leapcheck(2021));//Output: false
