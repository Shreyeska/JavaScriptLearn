//25. Function that takes an array of strings as input and returns a new array with all the strings in uppercase.

function changeString(str){
    const uppercaseString =[];
    for (let i=0; i< str.length;i++){
        uppercaseString.push(str[i].toUpperCase());
    }
    return uppercaseString;
}

const string = ['alicn', 'rogue', 'azina', 'covey'];
console.log(changeString(string));


