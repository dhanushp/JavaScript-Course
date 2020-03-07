var john = {
    fullName: 'John Smith',
    mass: 52,
    height: 1.80,
    calcBMI: function(){
        this.BMI = this.mass/(this.height * this.height)
    }
};

john.calcBMI();
console.log(john);

var mark = {
    fullName: 'Mark',
    mass: 52,
    height: 1.90,
    calcBMI: function(){
        this.BMI = this.mass/(this.height * this.height)
    }
};

mark.calcBMI();
console.log(mark);

if( mark.BMI > john.BMI ){
    console.log( mark.fullName + ' BMI is greater with ' + mark.BMI);
} else if ( mark.BMI < john.BMI ) {
    console.log( mark.fullName + ' BMI is greater with ' + john.BMI);
} else {
    console.log ('Mark and John are having same BMI');
}