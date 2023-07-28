// https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

function nthFibo(n) {
  if (n === 0 || n === 1) {
    return 0;
  }
  const fibArr = [0, 1];

  while (fibArr.length <= n) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }

  return fibArr[n - 1];
}
