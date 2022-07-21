// https://www.codewars.com/kata/514a677421607afc99000002

// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]

// getNames(data) // should return ['Joe', 'Bill', 'Kate']

function getNames(data) {
  return data.map((e) => e.name);
}
