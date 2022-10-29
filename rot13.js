// https://www.codewars.com/kata/530e15517bc88ac656000716/javascript

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(word) {
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return word
    .split('')
    .map((el, i) => {
      if (!lower.includes(el) & !upper.includes(el)) {
        return el;
      } else if (el === el.toLowerCase()) {
        let index = lower.indexOf(el) + 13;
        return lower[index % 26];
      } else {
        let index = upper.indexOf(el) + 13;
        return upper[index % 26];
      }
    })
    .join('');
}
