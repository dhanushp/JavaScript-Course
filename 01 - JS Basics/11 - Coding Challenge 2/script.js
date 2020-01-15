// Coding challenge 2

var johnGame1 = 89;
var johnGame2 = 120;
var johnGame3 = 103;

var mikeGame1 = 116;
var mikeGame2 = 94;
var mikeGame3 = 123;

var maryGame1 = 97;
var maryGame2 = 134;
var maryGame3 = 105;

var AverageJohn = (johnGame1 + johnGame2 + johnGame3)/3;

var AverageMike = (mikeGame1 + mikeGame2 + mikeGame3)/3;

var AverageMary = (maryGame1 + maryGame2 + maryGame3)/3;

if( AverageJohn > AverageMike) {
    console.log('John\'s team is the winner with ' + AverageJohn + ' points');
} else if ( AverageJohn < AverageMike) {
    console.log('Mike\'s team is the winner with ' + AverageMike + ' points');
} else {
    console.log('Both the teams have same average points.')
}

if( AverageJohn > AverageMike && AverageJohn > AverageMary) {
    console.log('John\'s team is the winner with ' + AverageJohn + ' points');
} else if ( AverageMike > AverageJohn && AverageMike > AverageMary) {
    console.log('Mike\'s team is the winner with ' + AverageMike + ' points');
} else if ( AverageMary > AverageJohn && AverageMary > AverageMike) {
    console.log('Mary\'s team is the winner with ' + AverageMary + ' points');
} else {
    console.log('All the teams have same average points.')
}

console.log('Average of John\'s team is ' + AverageJohn);
console.log('Average of Mike\'s team is ' + AverageMike);
console.log('Average of Mary\'s team is ' + AverageMary);   