// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let newArr = s.split(' ');
  let lowCount = 0;

  newArr.map((c) => {
    if (lowCount === 0) {
      lowCount = c.length;
    } else if (c.length < lowCount) {
      lowCount = c.length;
    }
  });
  return lowCount;
}
