// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function (text) {
  function encoder(str) {
    let second = str.slice(1, 2);
    let last = str.slice(-1);
    return str
      .split('')
      .map((el, i) =>
        i === 0
          ? (el = el.charCodeAt(0))
          : i === 1
          ? (el = last)
          : i === str.length - 1
          ? (el = second)
          : el
      );
  }

  return text
    .split(' ')
    .map((el) => encoder(el).join(''))
    .join(' ');
};
