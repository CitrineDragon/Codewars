// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
  if (seconds === 0) {
    return 'now';
  }
  const y = Math.floor(seconds / 31536000);
  const d = Math.floor(seconds / 86400) % 365;
  const h = Math.floor(seconds / 3600) % 24;
  const m = Math.floor(seconds / 60) % 60;
  const s = seconds % 60;

  const resultArr = [];
  const durationArr = [
    y,
    'year',
    d,
    'day',
    h,
    'hour',
    m,
    'minute',
    s,
    'second',
  ];

  for (let i = 0; i < 9; i += 2) {
    if (durationArr[i] > 0) {
      if (durationArr[i] === 1) {
        resultArr.push(`${durationArr[i]} ${durationArr[i + 1]}`);
      } else {
        resultArr.push(`${durationArr[i]} ${durationArr[i + 1]}s`);
      }
    }
  }

  //There's probably a DRY way to handle the punctuation but I am struggling to find it.
  //I'll likely return and refactor the return.
  return resultArr.length === 5
    ? `${resultArr[0]}, ${resultArr[1]}, ${resultArr[2]}, ${resultArr[3]} and ${resultArr[4]}`
    : resultArr.length === 4
    ? `${resultArr[0]}, ${resultArr[1]}, ${resultArr[2]} and ${resultArr[3]}`
    : resultArr.length === 3
    ? `${resultArr[0]}, ${resultArr[1]} and ${resultArr[2]}`
    : resultArr.length === 2
    ? `${resultArr[0]} and ${resultArr[1]}`
    : resultArr.join('');
}
