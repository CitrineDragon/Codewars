// https://www.codewars.com/kata/55733d3ef7c43f8b0700007c/train/javascript

// Task:
// You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

// Note: Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// (n)(n-1)(n-2)...4321
// (n)(n-1)(n-2)...432
// (n)(n-1)(n-2)...43
// (n)(n-1)(n-2)...4
// ...............
// ..............
// (n)(n-1)(n-2)
// (n)(n-1)
// (n)

function pattern(n) {
  let num = '';
  let output = '';

  while (n > 0) {
    num += n;
    output = num + (output ? '\n' : '') + output;
    n--;
  }
  return output;
}
