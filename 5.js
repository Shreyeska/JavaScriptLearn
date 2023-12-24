//5. Function that takes two numbers as input and returns the larger of the two.

function compare(a,b){
    if (a>b){
        return a + ' is Greater.';
    }
    else if (a<b){
        return b + ' is Greater.';
    }
    else
        return 'Invalid';
}

const result = compare (4,5); // Explanatory way
console.log (result);// output: 5 is Greater.

console.log (compare(5,6));//Shorter way. Output: 6 is greater.