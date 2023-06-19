// https://www.codewars.com/kata/5a86073fb17101e453000258/train/javascript

// Emotional Sort ( ︶︿︶)
// You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

// :D -> Super Happy
// :) -> Happy
// :| -> Normal
// :( -> Sad
// T_T -> Super Sad
// Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

// And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

// Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

// Super Happy -> Happy -> Normal -> Sad -> Super Sad
// If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

// Super Sad -> Sad -> Normal -> Happy -> Super Happy
// Example:

// arr = [':D', ':|', ':)', ':(', ':D']
// sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
// sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
// More in test cases!

// Notes:

// The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
// All emotions will be valid
// Enjoy! (づ｡◕‿‿◕｡)づ

// function sortEmotions(arr, order) {
//   let emotionalObj = {
//     1: ':D',
//     2: ':)',
//     3: ':|',
//     4: ':(',
//     5: 'T_T',
//   };
//   function getKey(object, value) {
//     return Object.keys(object).find((key) => object[key] === value);
//   }
//   let resOrder = arr
//     .map((x) => getKey(emotionalObj, x))
//     .sort((a, b) => (order ? a - b : b - a));
//   return resOrder.map((x) => emotionalObj[x]);
// }

function sortEmotions(arr, order) {
  let emotionalObj = {
    ':D': 1,
    ':)': 2,
    ':|': 3,
    ':(': 4,
    T_T: 5,
  };
  return arr.sort((a, b) =>
    order
      ? emotionalObj[a] - emotionalObj[b]
      : emotionalObj[b] - emotionalObj[a]
  );
}

numberToEnglish(80085);
