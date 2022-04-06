// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(arr) {
  if (arr.length < 1) {
    return 0;
  }
  let result = arr.reduce((total, num) => total + num, 0);
  return result / arr.length;
}

function find_average(arr) {
  return arr.length < 1
    ? 0
    : arr.reduce((total, num) => total + num, 0) / arr.length;
}
