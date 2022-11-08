// https://www.codewars.com/kata/52774a314c2333f0a7000688/javascript

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

//Solved using a LIFO stack
function validParentheses(str) {
  //Initializing the stack
  let stack = [];
  //Initilizing loop to iterate through str
  for (let i = 0; i < str.length; i++) {
    //If the el is an open parens, move it to the stack
    if (str[i] === '(') {
      stack.push('(');
      //If the el is a closed parens and the last el in the stack isn't an open parens, false
    } else if (str[i] === ')' && stack[stack.length - 1] !== '(') {
      return false;
      //If the el is a closed parens and the last el in the stack is an open parens, pop last el from stack
    } else if (str[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    }
  }
  //If loop finishes and stack isn't empty, false
  if (stack.length !== 0) {
    return false;
    //If loop finishes and stack is empty, true
  } else {
    return true;
  }
}

// function validParentheses(str) {
//   let val = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '(') val++;
//     if (str[i] === ')') val--;
//     if (val < 0) return false;
//   }
//   return val === 0
// }

// function validParentheses(str) {
//   let loop = 0;
//   let curLen = 0
//   let prevLen = 0
//   while (str.length > 0) {
//     prevLen = curLen;
//     curLen = str.length
//     loop++
//     str = str.replace('()','')
//     if (loop > 1 && curLen === prevLen) {
//       return false;
//     }
//   }
//   return true;
// }
