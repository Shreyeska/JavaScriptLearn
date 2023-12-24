//6. Function that takes a string as input and checks if it contains the word "JavaScript". Return true if it does, false otherwise.

function checkString(str){
    return str.includes ("JavaScript");
}

const StringA =' This is JavaScript.';
console.log (checkString(StringA));
const StringB =' This is Python.';
console.log (checkString(StringB));


console.log (checkString('This is JavaScript.'));
console.log (checkString('This is Python.'));
