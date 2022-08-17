// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  let newArr = str.split(' ').map((el) => {
    let num = el
      .split('')
      .filter((val) => Number.isInteger(+val))
      .join('');
    let word = el
      .split('')
      .filter((val) => !Number.isInteger(+val))
      .join('');
    num = String.fromCharCode(num);
    if (word.length >= 2) {
      const len = word.length;
      word = word[len - 1].concat(word.substring(1, len - 1).concat(word[0]));
    }
    return num.concat(word);
  });
  return newArr.join(' ');
}
