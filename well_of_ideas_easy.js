// Well of Ideas - Easy Version
// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x) {
  let sum = 0;
  x.forEach((s) => (s === 'good' ? sum++ : sum));
  if (sum === 0) {
    return 'Fail!';
  } else if (sum < 3) {
    return 'Publish!';
  } else {
    return 'I smell a series!';
  }
}

function well(x) {
  let goodCount = x.filter((str) => str === 'good').length;
  return goodCount < 1
    ? 'Fail!'
    : goodCount < 3
    ? 'Publish!'
    : 'I smell a series!';
}
