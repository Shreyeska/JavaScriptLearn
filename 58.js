//58. Function that generates the nth number in the Fibonacci sequence.

function Fibonacci(number) {
    let a=1, b=1, c=0, temp= 0;
    console.log (a , b);
    for (let i=2; i<number; i++){
        c = a+b;
        temp = a;
        a=b;
        b=c;
        console.log (c);
    }
}

console.log (Fibonacci(6));