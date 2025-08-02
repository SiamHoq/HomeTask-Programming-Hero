// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for(let n=1; n<=100; n++){
    if(Number.isInteger(Math.sqrt(n)) && n>1){
        console.log("summation : ",n);
        break;
    }
}

