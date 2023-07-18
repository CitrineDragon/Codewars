// https://www.codewars.com/kata/5626b561280a42ecc50000d1/javascript

function sumDigPow(a, b) {
  // Array where we will store Eureka numbers.
  let result = [];

  function getSum(num) {
    // Turns the number into a string so we can split the digits into an array.
    let arr = num.toString().split('');
    // Maps through the array multiplying by a sequential exponent and summing.
    let sum = arr
      .map((num, ind) => num ** (ind + 1))
      .reduce((t, c) => t + +c, 0);
    // If the sum is equal to the original number, we push to our results array.
    if (sum === num) {
      result.push(num);
    }
  }

  // We test each number in the range to check for Eureka numbers
  for (let i = a; i <= b; i++) {
    getSum(i);
  }

  // Return all Eureka numbers found.
  return result;
}
