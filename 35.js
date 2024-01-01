//35. Function that takes an object (representing a person) as input and prints their name and age to the console.

function input (person){
    if (person.name && person.age){
    console.log (`Name: ${person.name}`);
    console.log (`Age: ${person.age}`);
    }
    else{
        console.log ('Invalid object.');
    }
};
const person = {
    name:'Alicin',
    age: 21
};
const person1={};

input (person); // Output: Name: Alicin /n Age: 21
input (person1); //Output: Invalid Object.