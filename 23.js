//23. Function that takes a positive integer as input and prints a right-angled triangle of stars (*) with the given height.
function triangle(height){
    for (let j=1; j<=height; j++){
        let row= '';
        for (let i=1; i<=j; i++){
            row += '*';
        }
        console.log(row);
    }
}
triangle(7);