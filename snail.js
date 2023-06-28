// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

snail = function (array) {
  //Array that will hold our result
  let result = [];

  while (array.length) {
    //Top: Push the first array to our result.
    //SHIFT removes the array from the argument.
    result.push(...array.shift());

    //Right: Grab the last char of each array and push to result;
    //POP removes the last char of each array in the argument.
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }

    //Bottom: Reverse the last array or an empty arr and push to result.
    //POP removes the last array in the argument.
    result.push(...(array.pop() || []).reverse());

    //Left: Grab the last char of each array and push to result; Iterate in reverse to go from bottom to top.
    //SHIFT removes the first char of each array in the argument.
    for (let i = array.length - 1; i > 0; i--) {
      result.push(array[i].shift());
    }
  }
  return result;
};
