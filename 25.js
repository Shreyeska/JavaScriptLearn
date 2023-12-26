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

//28 Function that takes an array of numbers as input and returns the largest number in the array.

function Arrayofnumbers(num){
    let temp=0;
    for(let i =0; i<num.length;i++)
    {
        for (let j= i+1; j< num.length;j++){
            if (num[i] < num[j]){
                temp = num[i];
                num[i]=num[j];
                num[j] = temp;           
            }
        }
    }
    return num[(0)];
}

const arrI= [2,3,4,5,1];
console.log(Arrayofnumbers(arrI));

//29. Function that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.
function AlphaSorting(str1){
    const sorted = str1.slice().sort();
    return sorted;
}

const ArrayofStrings = ['Banana', 'Terracotta', 'Pie'];
console.log(AlphaSorting(ArrayofStrings));

//30. Function that takes an array of numbers as input and returns the average of those numbers.

function avgofarray(numbers){
    let avg = 0;
    let sum=0;
    for(let i= 0; i<numbers.length; i++){
        sum +=numbers[i];
    }
    return avg=sum/numbers.length;
}
const Arrayforaverage = [1,2,3,4,5];
console.log(avgofarray(Arrayforaverage));

//31. Function that takes an array of strings as input and returns a new array with the strings reversed.


//32. Function that takes two arrays as input and returns a new array with the elements of both arrays combined.

//33. Function that takes an array of numbers as input and returns a new array with only unique values (no duplicates).

//34. Create an object representing a person with properties: name, age, and city.

// 35. Function that takes an object (representing a person) as input and prints their name and age to the console.


// 36. Create an array of objects, each representing a book with properties: title, author, and year.
// 37. Function that takes an array of book objects as input and returns an array with only the book titles.

// 38. Function that takes an array of book objects as input and returns the total number of years (sum of years) for all books.

// 39. Create an object representing a car with properties: make, model, and year.

// 40. Function that takes a car object as input and returns a string with the make, model, and year combined (e.g., "Toyota Corolla 2022").

// 41. Function that takes an array of car objects as input and returns the number of cars that are from a specific year.

// 42. Create an object representing a student with properties: name, age, and grades (an array of numbers).

// 43. Function that takes a student object as input and returns their average grade.

// 44. Function that takes two numbers as arguments and returns their sum.

// 45. Function that calculates the area of a rectangle. The function should take the width and height as parameters and return the area.

// 46. Function that reverses a given string. For example, "hello" should return "olleh".

// 47. Function to calculate the factorial of a given non-negative integer. The factorial of a non-negative integer `n` is the product of all positive integers less than or equal to `n`.

// 48. Function that checks if a given word is a palindrome (reads the same forwards and backwards).

// 49. Function that counts the number of vowels in each string.

// 50. Function that takes a base and an exponent and returns the result of raising the base to the exponent.

// 51. Function that finds the maximum of two numbers.

// 52. Function that takes an array of numbers and returns the sum of all the elements.

// 53. Function that takes an array of numbers and returns a new array containing only the positive numbers.

// 54. Function that converts the first letter of each word in a sentence to uppercase.

// 55. Function that reverses an array.

// 56. Function that checks if a given number is prime.

// 57. Function that concatenates two arrays.

// 58. Function that generates the nth number in the Fibonacci sequence.

