// https://www.codewars.com/kata/57ee24e17b45eff6d6000164/train/javascript

// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

// function catMouse(x) {
//   let catIndex = x.split('').indexOf('C');
//   let mouseIndex = x.split('').indexOf('m');
//   return Math.abs(catIndex - mouseIndex) <= 4 ? 'Caught!' : 'Escaped!';
// }

function catMouse(x) {
  return Math.abs(x.split('').indexOf('C') - x.split('').indexOf('m')) <= 4
    ? 'Caught!'
    : 'Escaped!';
}
