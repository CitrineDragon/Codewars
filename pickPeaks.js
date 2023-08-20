function pickPeaks(arr) {
  let pos = [];
  let peaks = [];

  function expand(l, r) {
    while (r < arr.length && arr[l] === arr[r]) r++;
    if (arr[l - 1] < arr[l] && arr[r] < arr[l]) {
      pos.push(l);
      peaks.push(arr[l]);
    }
  }

  for (let i = 1; i < arr.length - 1; i++) expand(i, i + 1);
  return { pos, peaks };
}
