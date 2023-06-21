// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  //Returns the given array without any zeros
  let result = arr.filter((el) => el !== 0);

  //Determines the number of zeros removed
  let count = arr.length - result.length;

  //Pushes the necessary zeros back onto the end of the array
  for (let i = 0; i < count; i++) {
    result.push(0);
  }

  return result;
}

function moveZeros(arr) {
  return arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0));
}
