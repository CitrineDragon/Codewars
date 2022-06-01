// https://www.codewars.com/kata/542ebbdb494db239f8000046/train/javascript

// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

// When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

function nextItem(xs, item) {
  let found = false;
  for (key of xs) {
    if (found === true) {
      return key;
    } else if (key === item) {
      found = true;
    }
  }
}

// function nextItem(xs, item) {
//   let found = false;
//   let result;
//   for (key of xs) {
//     if ( key === item) {
//       found = true;
//     } else if (found === true) {
//       result = key;
//       break;
//     }
//   }
//   return result;
// }
