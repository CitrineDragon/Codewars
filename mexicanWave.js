// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

function wave(str) {
  let strArr = str.split('');
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (strArr[i] === ' ') {
      continue;
    }
    strArr[i] = strArr[i].toUpperCase();
    result.push(strArr.join(''));
    strArr = strArr.map((el) => el.toLowerCase());
  }
  return result;
}
