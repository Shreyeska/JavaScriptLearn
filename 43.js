//43. Function that takes a student object as input and returns their average grade.

function averageGrade(student) {
    const grade = student.grades;
    if (grade.length === 0) {
        return 0;
    }

    const sum = grade.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grade.length;

    return average;
}


const student = 
    {
    name: 'Alicin',
    grades: [90, 95, 80, 80, 85],
    age: 21
    }
const result = averageGrade(student);
console.log(result);