// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

//This is more performant for larger inputs
function firstNonRepeatingLetter(s) {
  const charCounts = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    const count = charCounts.get(char) || 0;
    charCounts.set(char, count + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (charCounts.get(char) === 1) {
      return s[i];
    }
  }

  return '';
}

// function firstNonRepeatingLetter(s) {
//   const lowercase = s.toLowerCase();
//   for (let i = 0; i < s.length; i++) {
//     if (
//      lowercase.lastIndexOf(lowercase[i]) ===
//      lowercase.indexOf(lowercase[i])
//     ) {
//       return s[i];
//     }
//   }
//   return '';
// }
