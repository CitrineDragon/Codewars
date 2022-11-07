// https://www.codewars.com/kata/576bb3c4b1abc497ec000065/train/javascript

// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

function compare(s1, s2) {
  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const isAlpha = (cVal) => alpha.includes(cVal);
  s1 = s1 === null ? [''] : s1.toUpperCase().split('');
  s2 = s2 === null ? [''] : s2.toUpperCase().split('');

  const count1 = s1.every(isAlpha)
    ? s1.reduce((acc, c) => acc + c.charCodeAt(0), 0)
    : 0;

  const count2 = s2.every(isAlpha)
    ? s2.reduce((acc, c) => acc + c.charCodeAt(0), 0)
    : 0;

  return count1 === count2;
}
