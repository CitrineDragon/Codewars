// https://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript

// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john'])
// #=> { 'james': 2, 'john': 1}

function count(array) {
  let obj = {};

  array.forEach((el) => (obj[el] ? obj[el]++ : (obj[el] = 1)));

  return obj;
}
