'use strict';


var number = 3;
var string = 'Hello!';
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4 / 0);
console.log('Qwerty' / 9);

let assdf;
console.log(assdf);

let persone = {
    name: 'John',
    age: 25,
    isMarried: false,
};

console.log(persone.name);
console.log(persone['name']);

let arr = [13, 25, 34, 47];
console.log(arr[3]);

// alert('Hello, world!');
// let answer = confirm('Are you herr?');
// console.log(answer);

// let answer = +prompt('18?', 'Yes' );
// console.log(typeof(answer));

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr++);
console.log(--decr);

let isChecked = false,
    isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose);