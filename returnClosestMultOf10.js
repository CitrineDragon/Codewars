// https://www.codewars.com/kata/58249d08b81f70a2fc0001a4/train/javascript

// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37
// Expected output:

// 20
// 30
// 40

const closestMultiple10 = (num) => {
  let rem = num % 10;
  return rem < 5 ? num - rem : num - rem + 10;
};
