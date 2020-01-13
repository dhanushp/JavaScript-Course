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

// Calculate Boolean Algebra
var BMIValue = BMIMark > BMIJohn;

// Print string to console containing variable from above variable
console.log("Is Mark's BMI higher than John's? " + BMIValue);