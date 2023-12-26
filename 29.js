//29. Function that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.
function AlphaSorting(str1){
    const sorted = str1.slice().sort();
    return sorted;
}

const ArrayofStrings = ['Banana', 'Terracotta', 'Pie'];
console.log(AlphaSorting(ArrayofStrings));
