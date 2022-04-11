// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  return Number(
    num
      .toString()
      .split('')
      .map((i) => Math.pow(i, 2))
      .join('')
  );
}

// Number wraps and returns the result back as a number
// toString converts num to a string so that we can iterate through it.
// split puts the string into an array so that we can map
// We map through each element and square it with pow
// then we join it back to a string and return a number.
