/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 70
const ticketPrice = 500
const student = false
// const discountPrice = 0

if(age<10){
    console.log("Free")
}
else if(student){ //age>=10 && age<=28
     const discountPrice = (ticketPrice * 50)/100;
     const payable = ticketPrice - discountPrice
    console.log("ticket price with 50% discount for student : ",payable)
}
else if(age>=60){
    
    const discountPrice = ticketPrice * 15/100;
    const payable = ticketPrice - discountPrice
    console.log("ticket price with 15% discount for old : ",payable)
}
else{
    console.log("Regular ticket fare 800 tk")
}