/**
 * O(1)
 * Accessing and changing the value of the (n) element
 * Adding an element to the end of an array
 * Removing an element from the end of an array
 *
 * O(n)
 * Finding an element
 * Adding not to the end of the array
 * Removing not from the end of the array
 */

const arr = ['a', 'b', '*'];

arr[2] = 'c'; // Accessing and changing the value of the (n) element
console.log(arr); // [ 'a', 'b', 'c' ]

arr.push('d'); // Adding an element to the end of an array
console.log(arr); // [ 'a', 'b', 'c', 'd' ]

arr.pop(); // Removing an element from the end of an array
console.log(arr); // [ 'a', 'b', 'c' ]

arr.find(el => el === 'c'); // Finding an element

arr.unshift("x"); // Adding not to the end of the array
console.log(arr); // [ 'x', 'a', 'b', 'c' ]

arr.shift(); // Removing not from the end of the array
console.log(arr); // [ 'a', 'b', 'c' ]
