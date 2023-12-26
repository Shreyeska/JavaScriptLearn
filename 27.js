//27. Function that takes an array of strings as input and returns the number of strings that have more than five characters.

function stringCount(str){
    let count=0;
    arr = [];
    for(let i=0; i<str.length;i++){
        if (str[i].length >= 5){
            arr.push(str[i]);
            count++;
        }
    }
    console.log('The number of string greater than 5 in the array are ' + count + ' and they are:');
    return arr;
    
}

arrayofStrings=['alicin', 'rogue', 'can', 'play'];

console.log(stringCount(arrayofStrings));

 
