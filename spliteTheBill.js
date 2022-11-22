// https://www.codewars.com/kata/5641275f07335295f10000d0/train/javascript

// It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

// The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
// The function should return an object/dict with the same names, showing how much money the members should pay or receive.
// Further points:

// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.
// Translations and comments (and upvotes!) welcome.

// Example
// 3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

// var group = {
//     A: 20,
//     B: 15,
//     C: 10
// }

// splitTheBill(group) // returns {A: 5, B: 0, C: -5}

// function splitTheBill(x) {
//   //Create the return Object
//   let hash = {};

//   //Get names of guests
//   let group = Object.keys(x);

//   //Determine the average spent by guest
//   let avg = group.reduce((acc, c) => acc + x[c], 0) / group.length;

//   //Calcualate the difference between paid / owed for each guest
//   group.forEach(
//     (el) => (hash[el] = (hash[el] || 0) + +(x[el] - avg).toFixed(2))
//   );

//   return hash;
// }

function splitTheBill(x) {
  let obj = {};
  let avg =
    Object.values(x).reduce((acc, c) => acc + c, 0) / Object.values(x).length;
  for (let key in x) {
    obj[key] = +(x[key] - avg).toFixed(2);
  }
  return obj;
}
