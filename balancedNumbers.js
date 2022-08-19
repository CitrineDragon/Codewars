// https://www.codewars.com/kata/5a4e3782880385ba68000018/javascript

// Definition
// Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

// Task
// Given a number, Find if it is Balanced or not .

function balancedNum(n) {
  n = n.toString();

  function calc(n) {
    let bC = [...String(n)].filter((e, i) => i < n.length / 2 - 1);
    let aC = [...String(n)].filter((e, i) => i > n.length / 2);
    return bC.reduce((t, c) => (t += +c), 0) ===
      aC.reduce((t, c) => (t += +c), 0)
      ? 'Balanced'
      : 'Not Balanced';
  }

  return n.length < 3 ? 'Balanced' : calc(n);
}
