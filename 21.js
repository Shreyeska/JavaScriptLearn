//21. Function that takes a string as input and counts the number of occurrences of a specific character using a loop.

function countChar(str, char){
    let count = 0;
    for(let i=0; i<=str.length; i++){
        if (str[i]===char ){
            count++;
        }
    }
    return count;
}
console.log(countChar("Joey doesnt share food", 'e'));//Output: 3
console.log(countChar("Bleh de la Bleh de Blu Blah Bleh", 'e'));// Output: 5
