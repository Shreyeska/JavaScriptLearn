//18. Program that iterates over an array of strings and prints each string to the console.
function ArrayofString(str){
 for(let i=0; i< str.length; i++){
    console.log(str[i]);
 }
}
const String1 = ['Hello', 'World', 'Welcome', 'To', 'Learning', 'JavaScript'];
ArrayofString(String1);

//without function
const String2 = ['Hello', 'World2', 'Welcome', 'To', 'Learning', 'JavaScript'];

for(let i=0; i < String2.length; i++){
    console.log(String2[i]);
 }