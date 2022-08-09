// https://www.codewars.com/kata/5590961e6620c0825000008f/train/javascript

// Given a string, swap the case for each of the letters.

// Examples
// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"

function swap(str) {
  return str
    .split('')
    .map((el) =>
      el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
    )
    .join('');
}
