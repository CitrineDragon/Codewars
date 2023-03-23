// https://www.codewars.com/kata/5521d84b95c172461d0000a4/train/javascript

// Convert a number to a binary coded decimal (BCD).

// You can assume input will always be an integer. If it is a negative number then simply place a minus sign in front of the output string. Output will be a string with each digit of the input represented as 4 bits (0 padded) with a space between each set of 4 bits.

// Ex.

// n =  10 -> "0001 0000"
// n = -10 -> "-0001 0000"

function toBcd(number) {
  let bcdObj = {
    0: '0000',
    1: '0001',
    2: '0010',
    3: '0011',
    4: '0100',
    5: '0101',
    6: '0110',
    7: '0111',
    8: '1000',
    9: '1001',
  };

  let negative = false;
  if (number < 0) {
    negative = true;
  }
  let arr = Math.abs(number).toString().split('');
  return negative
    ? '-'.concat(arr.map((x) => bcdObj[x]).join(' '))
    : arr.map((x) => bcdObj[x]).join(' ');
}
