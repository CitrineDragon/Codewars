// https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

function reverse(arr) {
  let newArr = [];
  arr.map((el) => newArr.unshift(el));
  return newArr;
}
