// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript

function prefill(n, v) {
  if (n === 0) {
    return [];
  }
  if (!Number.isInteger(Number(n)) || Number(n) < 0 || typeof n === 'boolean') {
    throw new TypeError(`${n} is invalid`);
  }

  return new Array(Number(n)).fill(v);
}
