// Truthy and falsy values and equality operators

// Falsy values : undefined, null, 0, '', NaN
// Truhty values : NOT falsey values

var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}



// Equality Operator
if (height == '23') {
    console.log('The == operator does type coercion');
}