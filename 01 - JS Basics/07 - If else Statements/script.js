// if else statement
var firstName = 'John';
var civilStatus = 'married';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefull marry soon :)');
}



var isMarried = false;
if (isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefull marry soon :)');
}



var massJohn, massMark, heightJohn, heightMark;

// Input details for John
massJohn = prompt('Enter Mass of John in kg');
heightJohn = prompt('Enter height of John in meter');
var BMIJohn = massJohn / (heightJohn*heightJohn);

// Input details for Mark
massMark = prompt('Enter Mass of Mark in kg');
heightMark = prompt('Enter height of Mark in meter');
var BMIMark = massMark / (heightMark*heightMark);

// Print BMI of John and Mark
console.log('BMI of John is ' + BMIJohn);
console.log('BMI of Mark is ' + BMIMark);

// Check whose BMI value is greater
if (BMIMark > BMIJohn) {
    console.log('BMI of Mark is greater!');
} else{
    console.log('BMI of John is greater!');
}