// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

// Happy coding! :)

function longestRepetition(s) {
  if (s === '') return ['', 0];
  let arr = [];
  let temp = '';
  for (let i = 0; i <= s.length; i++) {
    if (temp === '') {
      temp = s[i];
    } else if (temp !== '' && temp.includes(s[i])) {
      temp += s[i];
    } else if (temp !== '' && !temp.includes(s[i])) {
      arr.push(temp);
      temp = '';
      temp += s[i];
    }
  }
  arr.sort((a, b) => b.length - a.length);
  return [arr[0][0], arr[0].length];
}
