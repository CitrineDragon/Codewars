// https://www.codewars.com/kata/557af9418895e44de7000053/train/javascript

// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"

var repeatIt = function (str, n) {
  let newStr = '';
  for (let i = 1; i <= n; i++) {
    if (typeof str === 'string') {
      newStr += str;
    } else {
      return 'Not a string';
    }
  }
  return newStr;
};

var repeatIt = function (str, n) {
  return typeof str === 'string' ? str.repeat(n) : 'Not a string';
};
