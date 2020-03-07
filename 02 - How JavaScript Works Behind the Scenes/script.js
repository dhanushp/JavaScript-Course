// Lecture: The this keyword

calculateAge(2000);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);
    }
}

john.calculateAge;
