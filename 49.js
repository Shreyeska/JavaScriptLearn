//49. Function that counts the number of vowels in each string.
function vowelCount(string){
    let count = 0, letter ='';
    str = string.toLowerCase();
    for(let i = 0; i<=str.length; i++){
        if (str[i] === 'a' ||str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str  [i] === 'u' ){
            count ++;
        }
    }   
    return count;
}
console.log(vowelCount('mynameisalicin'));
