// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  let arr = [];

  while (str.length > 0) {
    arr.push(str.slice(0, 2));
    str = str.slice(2);
  }
  return arr.map((el) => (el.length < 2 ? el.padEnd(2, '_') : el));
}
