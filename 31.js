//31. Function that takes an array of strings as input and returns a new array with the strings reversed.
function reverseStrings(stringsArray){
    const reverseArray =[];
    for (let i=0; i < stringsArray.length; i++){
        const originalString= stringsArray[i];
        const reverseString = originalString.split('').reverse('').join('');
        reverseArray.push(reverseString);
    }
    return reverseArray;
}

const stringsArray =['Alicin', 'Rogue', 'Azina', 'Covey'];
const result = reverseStrings(stringsArray);
console.log (result); // Output: [ 'nicilA', 'eugoR', 'anizA', 'yevoC' ]