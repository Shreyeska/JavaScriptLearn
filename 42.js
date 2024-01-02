//42. Create an object representing a student with properties: name, age, and grades (an array of numbers).
const student = [
    {
        name: 'Alicin',
        age: 21,
        grades:[90, 90, 95, 85, 80] 
    },
    {
        name: 'Azina',
        age: 20,
        grades: [70, 75, 60, 55, 80] 
    },
    {
        name: 'Shreyeska',
        age: 22,
        grades: [95, 90, 85, 70, 60] 
    }
];

for(let i=0; i<student.length; i++){
console.log (student[i].name);
console.log (student[i].age);
console.log (student[i].grades);

}