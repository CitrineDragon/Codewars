// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

let uniqueInOrder = (input) => {
  //Checking if the input is a string; if so, make it an array.
  if (typeof input === 'string') {
    input = input.split('');
  }
  //Loop through the array in reverse
  for (let i = input.length; i > 0; i--) {
    //If the value is the same as the value before it, change it to a space
    if (input[i] === input[i - 1]) {
      input[i] = ' ';
    }
  }
  //Filter the array for spaces and return the remainder
  return input.filter((el) => el !== ' ');
};

//Loops forwards
// let uniqueInOrder = (input) => {
//   if (typeof input === 'string') {
//     input = input.split('');
//   }
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === input[i + 1]) {
//       input[i] = ' ';
//     }
//   }
//   return input.filter((el) => el !== ' ');
// };
