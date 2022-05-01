// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

function isVow(a) {
  let result = a.map((current) => {
    switch (current) {
      case 97:
        return 'a';
      case 101:
        return 'e';
      case 105:
        return 'i';
      case 111:
        return 'o';
      case 117:
        return 'u';
      default:
        return current;
    }
  });
  return result;
}
