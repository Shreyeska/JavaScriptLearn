//41. Function that takes an array of car objects as input and returns the number of cars that are from a specific year.

const carsArray = [
    {
        make:'Mercedes',
        model:'S-Class',
        year: 2022
    },
    {
        make:'BMW',
        model:'3-Series',
        year:2023
    },
    {
        make:'McLaren',
        model:'720-S',
        year:2022
    },
    {
        make:'Audi',
        model:'A6',
        year:2023
    },
    {
        make:'Lamborghini',
        model:'Huracan',
        year:2022
    },
    {
        make:'Porsche',
        model:'911',
        year:2022
    }
];

const targetYear = 2022;

function numberofCars(carsArray,targetYear){
    let count =0;
    for(let i=0; i<carsArray.length; i++){
        if (carsArray[i].year===targetYear){
            count++;
        }
    }
    return count;
}

console.log(`The number of cars made in the year ${targetYear} is: ${numberofCars(carsArray,targetYear)}`);
