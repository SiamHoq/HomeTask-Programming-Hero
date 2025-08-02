// Subtask-1:
// Display sum of all the odd numbers from 81 to 131.

let num = 81;
    let sum = 0;

while(num<=131){
    if(num%2!==0){
        console.log("number : ",num)
        sum = sum + num;
        console.log("sum of odd numbers",sum);
    }
    num++;
}

console.log("Display sum of all the even numbers from 206 to 311.")
// Subtask-2:
// Display sum of all the even numbers from 206 to 311.


let num1 = 206;
let sum1 = 0;

while(num1 <= 311){
    if(num1%2 == 0){
        console.log("number : ",num1)
        sum1 = sum1 + num1
        console.log("sum = ",sum1);
    }
    num1++;
}