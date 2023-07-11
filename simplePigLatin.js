// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Split the string at spaces and make it an array so we can use map.
  let wordArr = str.split(' ');

  //Map through each value in the array. If the value is an ! or ? return that, if not pigify the word then join the result back into a string
  return wordArr
    .map((word) =>
      word === '!' || word === '?'
        ? word
        : word.slice(1).concat(word.slice(0, 1).concat('ay'))
    )
    .join(' ');
}
