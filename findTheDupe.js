// https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript

// You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

// The array is unsorted.

// An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

// You should return the duplicate value as a single integer.

function findDup(arr) {
  let newArr = arr.sort((a, b) => a - b);
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] === newArr[i - 1]) {
      return newArr[i];
    }
  }
}
