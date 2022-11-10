// https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n, arr) {
  let sorted = arr.sort((a, b) => b - a);
  return sorted.slice(0, n).sort((a, b) => a - b);
}
