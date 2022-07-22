// https://www.codewars.com/kata/540c33513b6532cd58000259/train/javascript

// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

// Javascript arguments variable

function sum() {
  return [...arguments].reduce((t, c) => t + c, 0);
}
