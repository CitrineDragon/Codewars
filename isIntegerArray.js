// https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

function isIntArray(arr) {
  if (arr === []) return true;
  if (arr === null || arr === undefined || Array.isArray(arr) === false)
    return false;
  let output = arr.map((el) => (el === NaN ? false : Number.isInteger(el)));
  return output.includes(false) ? false : true;
}
