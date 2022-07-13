// https://www.codewars.com/kata/5887a6fe0cfe64850800161c/train/javascript

// Determine the area of the largest square that can fit inside a circle with radius r.

function areaLargestSquare(r) {
  let c = r * 2;
  return Math.pow(c, 2) / 2;
}
