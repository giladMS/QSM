"use strict";

// Number
// The number type represents both integer and floating point numbers.
let n1 = 123;
let n2 = 12.345;

console.log('Number: ', n1);
console.log('Number: ', n2);
console.log('Typeof Number: ', typeof n2);

// special numeric values

// Infinity 
// represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
let n3 = ( 1 / 0 ); // Infinity
console.log('Number - Infinity: ', n3);
// NaN 
// represents a computational error. It is a result of an incorrect or an undefined mathematical operation
let n4 = ( "not a number" / 2 );
console.log('Number - NAN: ', n4);

// String
// Double and single quotes are “simple” quotes. There’s no difference between them in JavaScript.
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
// There is no character type.
let s1 = 'Hello';
let s2 = "Hello You too";
let s3 = `Tag template expression - ${s1} - ${s2}`;

console.log('String: ', s1);
console.log('String: ', s2);
console.log('String: ', s3);
console.log('Typeof String: ', typeof s2);

// Boolean
// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
let b1 = true;
let b2 = false;

console.log('Boolean: ', b1);
console.log('Boolean: ', b2);
console.log('Typeof Boolean: ', typeof b2);

// Null
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
let nu1 = null;

console.log('Null: ', nu1);
console.log('Typeof Null: ', typeof nu1); //  this is an error in the language, it’s not actually an object.

// Undefined
// The meaning of undefined is “value is not assigned”
let un1 = undefined;

console.log('Undefined: ', un1);
console.log('Typeof Undefined: ', typeof un1);

// Object
// objects are used to store collections of data and more complex entities
// Function, Array, RegExp, Math, Set, etc...	