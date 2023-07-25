// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

function boredom(staff) {
  let deptScores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  };

  // const keys = Object.keys(staff);
  // const totalScore = keys
  //   .map((val) => deptScores[staff[val]])
  //   .reduce((t, c) => t + c, 0);
  // return totalScore > 99
  //   ? 'party time!!'
  //   : totalScore < 81
  //   ? 'kill me now'
  //   : 'i can handle this';

  const score = Object.keys(staff).reduce(
    (t, c) => t + deptScores[staff[c]],
    0
  );
  return score > 99
    ? 'party time!!'
    : score < 81
    ? 'kill me now'
    : 'i can handle this';
}
