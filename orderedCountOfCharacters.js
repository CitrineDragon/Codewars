// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

function orderedCount(text) {
  let arr = text.split('');
  let unique = arr.filter((e, i) => arr.indexOf(e) === i);
  return unique.map((e) => [e, text.split(e).length - 1]);
}
