// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

function add(x) {
  const sum = function (y) {
    return add(x + y);
  };
  sum.valueOf = function () {
    return x;
  };
  return sum;
}
