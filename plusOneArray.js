// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr) {
  let invalid = arr.filter((current) => current < 0 || current > 9);
  let last = arr[arr.length - 1];

  console.log(arr);

  if (arr.length === 0) {
    return null;
  }

  if (arr[arr.length - 1] === 9) {
    arr[arr.length - 1] = 0;
    if (arr[arr.length - 2] === 9) {
      arr[arr.length - 2] = 0;
      if (arr[arr.length - 3] === 9) {
        arr[arr.length - 3] = 0;
        if (arr[arr.length - 4] === undefined) {
          arr.unshift(1);
        } else {
          arr[arr.length - 4] += 1;
        }
      } else {
        arr[arr.length - 3] += 1;
      }
    } else {
      arr[arr.length - 2] += 1;
    }
  } else {
    arr[arr.length - 1] += 1;
  }

  return invalid.length > 0 ? null : arr;
}
