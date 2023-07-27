// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

function toWeirdCase(string) {
  let words = string.toLowerCase().split(' ');

  function weirdCase(word) {
    let wordArr = word.split('');
    return wordArr
      .map((letter, index) => (index % 2 === 0 ? letter.toUpperCase() : letter))
      .join('');
  }

  return words.map((word) => weirdCase(word)).join(' ');
}
