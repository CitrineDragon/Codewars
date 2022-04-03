// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// function getSum(a, b) {
//   let small;
//   let big;
//   let sum = 0;

//   if (a === b) {
//     return a;
//   } else if (a < b) {
//     small = a;
//     big = b;
//   } else if (b < a) {
//     small = b;
//     big = a;
//   }

//   for (let i = small; i <= big; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(getSum(3, 5));

// Find the first non-consecutive number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

// function firstNonConsecutive(arr) {
//   // if the array doesn't have at least two values, return null
//   if (arr[0] === undefined || arr[1] === undefined) {
//     return null;
//   }
//   // start the loop at one to compare with the previous value
//   for (let i = 1; i <= arr.length - 1; i++) {
//     // if the value doesn't equal 1, the numbers are not consecutive
//     if (arr[i] - arr[i - 1] !== 1) {
//       return arr[i];
//       // if I is equal to the last value in the array and they are all consecutive return null
//     } else if (i === arr.length - 1) {
//       return null;
//     }
//   }
// }

// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

// Well of Ideas - Easy Version
// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

// function well(x) {
//   let sum = 0;
//   x.forEach((s) => (s === 'good' ? sum++ : sum));
//   if (sum === 0) {
//     return 'Fail!';
//   } else if (sum < 3) {
//     return 'Publish!';
//   } else {
//     return 'I smell a series!';
//   }
// }

// function well(x){
//   let goodCount = x.filter((str) => str === 'good' ).length;
//   return goodCount < 1 ? 'Fail!' : goodCount < 3 ? 'Publish!' : 'I smell a series!';
// }

// Count of positives / sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// function countPositivesSumNegatives(input) {
//   let count = 0;
//   let sum = 0;
//   if (input === null || input === [ 0, 0 ] || input.length < 1) {
//     return [];
//   } else {
//     for (let i = 0; i < input.length; i++) {
//       if (input[i] > 0) {
//         count++;
//       } else if (input[i] < 0) {
//         sum += input[i];
//       }
//     }
//   }
//   return [count, sum];
// }
