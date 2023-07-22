// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript

function chooseBestSum(d, t, l) {
  if (!Array.isArray(l) || l.length < t) {
    return null;
  }

  function generateCombinations(start, t, combination, sumCombinations) {
    if (combination.length === t) {
      const sum = combination.reduce((acc, curr) => acc + curr, 0);
      if (sum <= d) {
        sumCombinations.push(sum);
      }
      return;
    }

    for (let i = start; i < l.length; i++) {
      combination.push(l[i]);
      generateCombinations(i + 1, t, combination, sumCombinations);
      combination.pop();
    }
  }

  let sumCombinations = [];
  generateCombinations(0, t, [], sumCombinations);

  return Math.max(...sumCombinations) === -Infinity
    ? null
    : Math.max(...sumCombinations);
}
