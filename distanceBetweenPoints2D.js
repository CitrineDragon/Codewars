// https://www.codewars.com/kata/58dced7b702b805b200000be

// This series of katas will introduce you to basics of doing geometry with computers.
// Point objects have x and y attributes (X and Y in C#) attributes.
// Write a function calculating distance between Point a and Point b.
// Tests round answers to 6 decimal places.

function distanceBetweenPoints(a, b) {
  return Number(
    Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)).toFixed(6)
  );
}

// Could have also used Math.hypot
