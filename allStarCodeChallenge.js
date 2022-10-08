// https://www.codewars.com/kata/58640340b3a675d9a70000b9/train/javascript

// This Kata is intended as a small challenge for my students

// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// removeVowels("drake") // => "drk"
// removeVowels("aeiou") // => ""

var removeVowels = function (str) {
  let vowels = 'aeiouAEIOU';
  return [...str].map((el) => (vowels.includes(el) ? '' : el)).join('');
};
