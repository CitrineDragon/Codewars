// https://www.codewars.com/kata/596f72bbe7cd7296d1000029/solutions/javascript

// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.

function deepCount(arr) {
  const stack = [...arr];
  let size = 0;

  while (stack.length) {
    //Removes the last element of the stack
    const next = stack.pop();
    size += 1;
    //If the element was an array, it's returned to the stack at 0 depth.
    if (Array.isArray(next)) {
      stack.push(...next);
    }
  }
  return size;
}
