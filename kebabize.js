// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '1234567980';

  let output = str
    .split('')
    .map((el, i) =>
      upper.includes(el) && i === 0
        ? el.toLowerCase()
        : upper.includes(el) && i !== 0
        ? `-${el.toLowerCase()}`
        : nums.includes(el)
        ? (el = '')
        : el
    )
    .join('');

  return output[0] === '-' ? output.replace('-', '') : output;
}
