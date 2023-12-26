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