//46. Function that reverses a given string. For example, "hello" should return "olleh".

function reverse (string){
    const reverString = string.split('').reverse().join('');
    return reverString;
}

console.log (reverse ('hello'));
