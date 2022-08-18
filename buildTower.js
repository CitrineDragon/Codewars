// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/solutions/javascript

// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(num) {
  let arr = [];
  let baseWidth = 0;
  let curWidth = 0;

  for (let i = num; i > 0; i--) {
    curWidth = i + i - 1;
    if (baseWidth < curWidth) {
      baseWidth = curWidth;
    }
    arr.unshift(
      `${' '.repeat((baseWidth - curWidth) / 2)}${'*'.repeat(
        curWidth
      )}${' '.repeat((baseWidth - curWidth) / 2)}`
    );
  }
  return arr;
}
