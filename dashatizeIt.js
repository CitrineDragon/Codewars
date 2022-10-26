// https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  if (Number.isInteger(num) === false) {
    return 'NaN';
  }
  num = Math.abs(num).toString().split('');

  for (let i = num.length - 1; i > 0; i--) {
    console.log(num[i]);
    if (num[i] % 2 == 0 && num[i - 1] % 2 != 0) {
      num.splice(i, 0, '-');
    } else if (num[i] % 2 != 0) {
      num.splice(i, 0, '-');
    }
  }
  return num.join('');
}
