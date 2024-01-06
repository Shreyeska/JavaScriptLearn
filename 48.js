//48. Function that checks if a given word is a palindrome (reads the same forwards and backwards).
function palindromCheck(string){
    const reverseString = string.split('').reverse().join('');
    if (reverseString == string){
        return ('The string is palindrome');
    }
    else{
        return ('The string is not palindrome');
    }
}

console.log(palindromCheck('racecar'));
console.log(palindromCheck('palindrome'));