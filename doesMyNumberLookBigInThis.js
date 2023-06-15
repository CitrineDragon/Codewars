// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// function narcissistic(value) {
//   //Sets variables to track the total and iteration; also turns the passed value into an array to use reduce
//   let total = 0,
//     i = 1,
//     valArr = String(value).split('');

//   //Loops until total greater than or equal to passed value
//   while (total < value) {
//     //Calcs the total of each value to the exponent of i; then increments i for following loop
//     total = valArr.reduce((t, c) => (t += c ** i), 0);
//     i++;
//   }
//   return total === value ? true : false;
// }

function narcissistic(value) {
  //Takes the value, turns it to a string and then an array
  return (
    String(value)
      .split('')
      //Maps over the arr and multiples each value by an exponent equal to the arrays length
      .map((el, _, arr) => el ** arr.length)
      //Reduces the array and checks to see if it equals the original passed value
      .reduce((t, c) => (t += c), 0) === value
  );
}
