// Find the first non-consecutive number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive(arr) {
  // if the array doesn't have at least two values, return null
  if (arr[0] === undefined || arr[1] === undefined) {
    return null;
  }
  // start the loop at one to compare with the previous value
  for (let i = 1; i <= arr.length - 1; i++) {
    // if the value doesn't equal 1, the numbers are not consecutive
    if (arr[i] - arr[i - 1] !== 1) {
      return arr[i];
      // if I is equal to the last value in the array and they are all consecutive return null
    } else if (i === arr.length - 1) {
      return null;
    }
  }
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
