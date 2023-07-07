// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split('   ')
    .map((word) =>
      word
        .split(' ')
        .map((letter) => (letter = MORSE_CODE[letter]))
        .join('')
    )
    .join(' ');
};
