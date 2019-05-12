// splice:
let arr1 = ["I", "study", "JavaScript"];

arr1.splice(1, 1); // from index 1 remove 1 element

console.log('splice: ', arr11 );// ["I", "JavaScript"]

let arr2 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr2.splice(0, 3, "Let's", "dance");
console.log('splice: ', arr12 );// ["Let's", "dance", "right", "now"]

// Slice:
let arr3 = ["t", "e", "s", "t"];

console.log('slice: ', arr3.slice(1, 3) );// // e,s
console.log('slice: ', arr3.slice(-2) );// s,t


// Concat
let arr4 = [1, 2];

// merge arr with [3,4]
console.log('concat: ', arr.concat([3, 4]) ); // 1,2,3,4

// merge arr with [3,4] and [5,6]
console.log('concat: ', arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// merge arr with [3,4], then add values 5 and 6
console.log('concat: ', arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// Split
let names = 'Bilbo, Gandalf, Nazgul';

let arr5 = names.split(', ');

for (let name of arr) {
  console.log('Split: ',`A message to ${name}.` ); // A message to Bilbo  (and other names)
}


// Join
let arr6 = ['Bilbo', 'Gandalf', 'Nazgul'];

let str6 = arr.join(';');

console.log('Join: ', str ); // Bilbo;Gandalf;Nazgul


// Iterate: forEach
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log('forEach: ',`${item} is at index ${index} in ${array}`);
});

// Filter
let users1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers1 = users1.filter(item => item.id < 3);

console.log('Filter : ',someUsers1.length); // 2


//Map 
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log('Map : ',lengths); // 5,7,6

// Reduce
let reduceArr = [1, 2, 3, 4, 5];

let reduceResult = reduceArr.reduce((sum, current) => sum + current, 0);

console.log('Indexof: ',reduceResult); // 15


// Indexof
let arr7 = [1, 0, false];

console.log('Indexof: ', arr7.indexOf(0) ); // 1
console.log('Indexof: ', arr7.indexOf(false) ); // 2
console.log('Indexof: ', arr7.indexOf(null) ); // -1

console.log('Indexof: ', arr7.includes(1) ); // true

// find
let users2 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user2 = users2.find(item => item.id == 1);

console.log('Find: ',user2.name); // John

// Sort
// The items are sorted as strings by default.
let arr8 = [ 1, 2, 15 ];

// the method reorders the content of arr (and returns it)
arr.sort();

console.log('Sort: ',arr8 );  // 1, 15, 2 - was sorted as array

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr9 = [ 1, 2, 15 ];

arr9.sort(compareNumeric);

console.log('Sort: ',arr9);  // 1, 2, 15


// Array.isArray
// arrays are used so often that there’s a special method

console.log('isArray: ', typeof {}); // object
console.log('isArray: ', typeof []); // same
console.log('isArray: ', Array.isArray({})); // false
console.log('isArray: ', Array.isArray([])); // true
