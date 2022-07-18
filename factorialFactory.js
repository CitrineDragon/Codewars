// https://www.codewars.com/kata/528e95af53dcdb40b5000171/train/javascript

// In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

// You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .

// Note: 0! is always equal to 1. Negative values should return null;

// For more on Factorials : http://en.wikipedia.org/wiki/Factorial

// Answer with recursion
// function factorial(n) {
//   return n < 0 ? null : n === 0 ? 1 : n * factorial(n - 1);
// }

// Answer without recursion
function factorial(n) {
  return n < 0
    ? null
    : n === 0
    ? 1
    : Array.from({ length: n }, (_, i) => i + 1).reduce((t, c) => t * c, 1);
}
