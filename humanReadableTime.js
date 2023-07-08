// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  let s = 0;
  let m = 0;
  let h = 0;

  while (seconds > 0) {
    if (seconds > 59) {
      m++;
    }
    if (seconds < 60) {
      s = seconds;
    }
    if (m > 59) {
      (m = 0), h++;
    }
    seconds -= 60;
  }
  return `${String(h).padStart(2, 0)}:${String(m).padStart(2, 0)}:${String(
    s
  ).padStart(2, 0)}`;
}
