// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/javascript

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  // ^\d{4} looks for 4 digits at the beginning
  //(?:\d{2}) Non-capture group that matches 2 digits
  // ?$ Preceeding capture group could be used 0 or 1 times.
  let regex = /^\d{4}(?:\d{2})?$/;
  return regex.test(pin);
}

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }
