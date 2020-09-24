// Lecture: Let and Const

//
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
let name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);



let i = 23;
for (let i = 0; i<5; i++) {
    console.log(i);
}

console.log(i);
*/

const box6 = {
    color: 'green',
    position: 1,
    clickme: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = `This is box number ${this.position} and it's color is ${this.color}`;
            alert(str);
        });
    }
}
box6.clickme();
