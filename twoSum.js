// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

function twoSum(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    let j = arr.indexOf(value - arr[i]);
    if (j !== -1) {
      return [i, j];
    }
  }
}
