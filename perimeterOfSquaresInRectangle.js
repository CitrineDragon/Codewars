// https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript

function perimeter(n) {
  if (n === 0) {
    return 4;
  }
  if (n === 1) {
    return 8;
  }

  function fibonacciArray(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [1];
    }

    const fibArray = [1, 1];
    while (fibArray.length <= n) {
      fibArray.push(
        fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
      );
    }

    return fibArray;
  }
  return fibonacciArray(n).reduce((t, c) => t + c * 4, 0);
}
