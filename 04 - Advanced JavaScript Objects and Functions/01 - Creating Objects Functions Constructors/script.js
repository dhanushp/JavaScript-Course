// Function Constructor

var Person = function(name,yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016-this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john= new Person('John',1990,'teacher');

var jane = new Person('Jane',1969,'Designer');

var mark = new Person('Mark',1994,'Pilot');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);