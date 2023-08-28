//www.codewars.com/kata/54d81488b981293527000c8f/javascript

function sumPairs(arr, val) {
  if (arr.length < 2) return undefined;
  let numSet = new Set();
  numSet.add(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const target = val - arr[i];

    if (numSet.has(target)) {
      return [target, arr[i]];
    } else {
      numSet.add(arr[i]);
    }
  }
  return undefined;
}
