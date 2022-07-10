// https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript

// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'
// Confused? Roll your mouse/tap over here

function addLetters(...letters) {
  let alpha = ' abcdefghijklmnopqrstuvwxyz';
  let total = 0;

  total = letters.map((e) => alpha.indexOf(e)).reduce((t, c) => t + c, 0);

  while (total > 26) {
    total -= 26;
  }
  return letters.length === 0
    ? 'z'
    : alpha
        .split('')
        .filter((_, i) => i === total)
        .join();
}
