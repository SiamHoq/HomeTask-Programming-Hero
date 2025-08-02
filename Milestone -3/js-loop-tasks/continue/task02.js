// display odd number from 55 to 85 and skip the numbers divisible by 5.

for(let n=55; n<=85; n++){
    if(n%2==1){
        if(n%5===0){
            continue;
        }
        console.log("odd numbers = ",n);
    }
}