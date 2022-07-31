// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x) {
  let str = x.filter((e) => typeof e === 'string').reduce((t, c) => t + +c, 0);
  let num = x.filter((e) => typeof e === 'number').reduce((t, c) => t + c, 0);
  return num - str;
}
