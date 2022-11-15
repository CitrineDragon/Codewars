// https://www.codewars.com/kata/569df0bc5565b243d500002b/javascript

// DESCRIPTION:
// We define a range with two positive integers n1 and n2 and an integer factor k, [n1, n1 + k*n2], the bounds of the defined range are included.

// We will be given two arrays: primeFactors and digits.

// primeFactors = [p1, p2, ..., pl] # p1, p2, ... and pl are prime factors

// digits = [d1, d2, ..., dj]  # d1, d2, ..., dj are digits from 0 to 9 included
// We want to find all the numbers, mi such that: n1 ≤ m1 < m2 < ....mi ≤ n1 + k*n2, and are divisible for all the prime numbers present in primeFactors and have all the digits present in digits.

// Let's see an example showing the function that will solve these challenge.

// n1 = 30
// n2 = 90
// k = 4
// factors = [2, 3]
// digits = [6, 2]
// --> return [126, 162, 216, 246, 264, 276] # result should be a sorted list with the found numbers.
// An empty list means that the are no numbers that may fulfill the given conditions.

// Range of inputs
// 100 <= n1 <= 500,

// 1000 <= n2 <= 8000

// 180 <= k <= 2500

// Prime factors will be inferior or equal to 31
// Happy coding!!

function findUs(n1, n2, k, primeFactors, digits) {
  let output = [];
  let max = n1 + k * n2;
  let increment = primeFactors.reduce((acc, c) => acc * c, 1);
  let digitsIncluded = (i, digits) =>
    digits.every((el) => [...String(i)].includes(String(el)));
  for (let i = 0; i <= max; i += increment) {
    if (digitsIncluded(i, digits)) {
      output.push(i);
    }
  }
  return output;
}
