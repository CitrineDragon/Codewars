// https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b) {
  return b.toString();
}

// Improved with validation
function booleanToString(b) {
  return typeof b === 'boolean' ? b.toString() : 'Please enter a boolean';
}

// Clever
function booleanToString(b) {
  return b ? 'true' : 'false';
}
