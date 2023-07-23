// https://www.codewars.com/kata/55afed09237df73343000042/train/javascript

function isLucky(n) {
  return n === 0
    ? true
    : String(n)
        .split('')
        .reduce((t, c) => t + +c, 0) %
        9 ===
        0;
}
