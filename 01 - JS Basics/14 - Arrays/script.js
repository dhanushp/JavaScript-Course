// Arrays

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

// Mutate Array Data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different Data Types
var John = ['John', 'Smith', 1990, 'designer', false];

John.push('blue');
John.unshift('Mr.');
John.pop();
John.pop();
John.shift();
console.log(John);

console.log(John.indexOf(1990)) ;
console.log(John.indexOf(90)) ;

var isDesigner =  John.indexOf('designer') ===-1 ? 'John is not a Designer' : 'John is a Designer';
console.log(isDesigner);