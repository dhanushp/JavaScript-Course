// Functions

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(2000);
var ageMike = calculateAge(1998);
var ageJane = calculateAge(2002);

console.log(ageJohn);
console.log(ageMike);
console.log(ageJane);


function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year); 
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' has already retired.');
    }

    
}

yearsUntilRetirement(2000, 'John');   
yearsUntilRetirement(1990, 'Mike');   
yearsUntilRetirement(1947, 'Mary');   