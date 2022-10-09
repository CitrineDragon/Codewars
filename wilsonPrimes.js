// https://www.codewars.com/kata/55dc4520094bbaf50e0000cb/train/javascript

// Wilson primes satisfy the following condition. Let P represent a prime number.
// Then ((P-1)! + 1) / (P * P) should give a whole number.
// Your task is to create a function that returns true if the given number is a Wilson prime.

// function amIWilson(p) {
//   let product = 1;
//   for (let i = p - 1; i > 1; i--) {
//     product *= i;
//   }
//   return ((product + 1) / (p * p)) % 1 === 0;
// }

// function amIWilson(p) {
//   function factorial(num) {
//     if (num === 0) {
//       return 1
//     } else {
//       return num * factorial(num - 1)
//     }
//   }
//   return Number.isInteger((factorial(p-1) + 1) / (p * p))
// }

function amIWilson(p) {
  let wilsonPrimes = [5, 13, 563];
  return wilsonPrimes.includes(p);
}
