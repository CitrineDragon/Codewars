// https://www.codewars.com/kata/57fb142297e0860073000064/train/javascript

function product(string) {
  const exclamations = [...string].filter((val) => val === '!').length;
  const questions = [...string].filter((val) => val === '?').length;

  return exclamations * questions;
}
