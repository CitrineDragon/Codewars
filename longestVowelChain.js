// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

function solve(s) {
  let vowels = 'aeiou';
  let arr = s
    .split('')
    .map((el) => {
      if (!vowels.includes(el)) {
        return (el = ' ');
      } else {
        return el;
      }
    })
    .join('')
    .split(' ')
    .sort((a, b) => b.length - a.length);
  return arr[0].length;
}
