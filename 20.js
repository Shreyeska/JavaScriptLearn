//20. Program that iterates over an array of objects representing people (with name and age properties) and prints their names to the console.

const peopleArray = [ 
    {name: "Alicin", age: 21},
    {name: "Shreyeska", age: 21},
    {name: "Azina", age: 20}
];
 console.log ("The names of the people are:");

 for(let i=0; i< peopleArray.length; i++){
    console.log(peopleArray[i].name);
 }
