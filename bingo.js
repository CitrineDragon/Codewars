// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/train/javascript

function bingo(a) {
  const winning = [2, 7, 9, 14, 15];
  const contains = (letter) => a.includes(letter);
  return winning.every(contains) ? 'WIN' : 'LOSE';
}
