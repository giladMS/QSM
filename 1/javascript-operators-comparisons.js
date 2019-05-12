"use strict";

// Unery
// An operator is unary if it has a single operand
let un = 1;

un = -un;
console.log('Unery example :', un);

// Unary plus
// The unary plus or, in other words, the plus operator + applied to a single value
// It actually does the same thing as Number(...), but is shorter
let unp = 1;
console.log('Unery plus (+) :', +unp); // 1

let unp2 = -2;
console.log('Unery plus (+) :', +unp2); // -2
console.log('Unery plus (+) :', +true); // 1
console.log('Unery plus (+) :', +""); // 0


// Binary
// An operator is binary if it has two operands
let x = 1, y = 3;
console.log('Binary example :', x + y);// 4

// String concatination
let s = "my" + "string";
console.log('String concatination :', s); //mystring

// The rule is simple: if either operand is a string, the other one is converted into a string as well.
console.log('String concatination :', '1' + 2); // 12
console.log('String concatination :', 2 + '1'); // 21
// Note that operations run from left to right. 
// If there are two numbers followed by a string, the numbers will be added before being converted to a string:
console.log('String concatination :', 2 + 2 + '1' ); // 41

// Increment/decrement
// Increment ++ increases a variable by 1:
let counter = 2;
counter++;      // works the same as counter = counter + 1, but is shorter
console.log('Increment ++ :', counter); // 3

// Decrement -- decreases a variable by 1:
let counter2 = 2;
counter--;      // works the same as counter = counter + 1, but is shorter
console.log('Decrement -- :', counter); // 3


// String comparison
// strings are compared letter-by-letter.
console.log('String comparison :', 'Z' > 'A'); // true
console.log('String comparison :', 'Glow' > 'Glee'); // true
// G is the same as G.
// l is the same as l.
// o is greater than e. Stop here. The first string is greater.

// Comparison of different types
// JavaScript converts the values to numbers.
console.log('Comparison of different types :', '2' > 1); // true, string '2' becomes a number 2
console.log('Comparison of different types :', '01' == 1 ); // true, string '01' becomes a number 1
let a = 0;
let b = "0";
console.log('Comparison of different types :', Boolean(a), Boolean(b), a == b ); // false, true, true

//Strict equality
console.log('Strict equality :', 0 == false ); // true, 
console.log('Strict equality :', 0 === false ); // false, 
console.log('Strict equality :', '' == false ); // true, 
console.log('Strict equality :', '' === false ); // false, 
console.log('Strict equality :', null == undefined ); // true, 
console.log('Strict equality :', null === undefined ); // false, 


