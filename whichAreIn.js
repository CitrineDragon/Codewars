// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(a, b) {
  return a.filter((x) => b.sort().join(' ').includes(x)).sort();
}
