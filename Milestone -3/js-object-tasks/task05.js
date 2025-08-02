// Loop through an object and print the key-value pairs with their types

const student = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

for( const pupil in student){

    // console.log(pupil, ' : ', student[pupil]);
    // console.log(pupil, ' : ',typeof student[pupil]);

    console.log("key:"+pupil+ " | type:  "+typeof student[pupil]);

}
