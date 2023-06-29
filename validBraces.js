// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

// function validBraces(braces) {
//   let stack = [];
//   let pairObj = { ')': '(', ']': '[', '}': '{' };
//   let inputArr = braces.split('');

//   for (let i = 0; i < inputArr.length; i++) {
//     if (
//       (inputArr[i] === ')' || inputArr[i] === ']' || inputArr[i] === '}') &&
//       stack.length === 0
//     ) {
//       return false;
//     }
//     if (
//       (inputArr[i] === ')' || inputArr[i] === ']' || inputArr[i] === '}') &&
//       stack[stack.length - 1] !== pairObj[inputArr[i]]
//     ) {
//       return false;
//     }
//     if (inputArr[i] === '(' || inputArr[i] === '[' || inputArr[i] === '{') {
//       stack.push(inputArr[i]);
//     }
//     if (inputArr[i] && stack[stack.length - 1] === pairObj[inputArr[i]]) {
//       stack.pop();
//     }
//   }
//   return stack.length === 0 ? true : false;
// }

function validBraces(braces) {
  let stack = [];
  let pairObj = { '(': ')', '[': ']', '{': '}' };

  for (let i = 0; i < braces.length; i++) {
    if (pairObj[braces[i]]) {
      stack.push(braces[i]);
    } else {
      if (braces[i] !== pairObj[stack.pop()]) {
        return false;
      }
    }
  }
  return !stack.length;
}
