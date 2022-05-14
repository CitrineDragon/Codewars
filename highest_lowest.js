// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  let highest = Math.max(...numbers.split(' '));
  let lowest = Math.min(...numbers.split(' '));
  return `${highest} ${lowest}`;
}
