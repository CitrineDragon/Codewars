// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

function topThreeWords(text) {
  let hash = {};
  let wordArr = text
    .toLowerCase()
    .replace(/-/g, '')
    .replace(/\//g, '')
    .replace(/\./g, '')
    .replace(/ ' /g, '')
    .replace(/,/g, '')
    .replace(/\r?\n|\r/g, '')
    .split(' ')
    .filter((val) => val !== '');

  for (let word of wordArr) {
    hash[word] = (hash[word] || 0) + 1;
  }

  let entries = Object.entries(hash);
  let sorted = entries.sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, 3).map((val) => val[0]);
}
