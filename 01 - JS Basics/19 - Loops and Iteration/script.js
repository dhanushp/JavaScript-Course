// Loops and Iteration
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//While Loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// Continue and Break Statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length; i >= 0; i--) {
    console.log(john[i]);
}