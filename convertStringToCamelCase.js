// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  if (str.length === 0) {
    return '';
  }

  let arr = str
    .split('')
    .map((el) => (el === '-' || el === '_' ? (el = ' ') : el))
    .join('')
    .split(' ');

  return arr
    .map((el, i) =>
      i > 0 ? (el = el[0].toUpperCase().concat(el.slice(1))) : el
    )
    .join('');
}
