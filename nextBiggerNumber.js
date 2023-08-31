// https://www.codewars.com/kata/55983863da40caa2c900004e/javascript

function nextBigger(n) {
  let numArr = String(n).split('');
  let len = numArr.length - 1;
  let lPointer;
  let rPointer;
  let total = Infinity;
  let temp;

  // if n is largest possible return -1
  if (
    n ===
    +String(n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  )
    return -1;

  // find left digit for swap
  for (let i = len; i >= 0; i--) {
    if (numArr[i - 1] < numArr[i]) {
      lPointer = i - 1;
      break;
    }
  }

  // find right digit for swap
  for (let i = lPointer; i <= len; i++) {
    if (numArr[i] > numArr[lPointer] && numArr[i] < total) {
      rPointer = i;
      total = numArr[rPointer];
    }
  }

  // swap the two numbers
  temp = numArr[lPointer];
  numArr[lPointer] = numArr[rPointer];
  numArr[rPointer] = temp;

  // split the arr and sort the right in ascending order
  let lSlice = numArr.slice(0, lPointer + 1);
  let rSlice = numArr.slice(lPointer + 1).sort();

  return +lSlice.concat(rSlice).join('');
}
