// https://www.codewars.com/kata/649c4012aaad69003f1299c1/train/javascript

// Grayscale colors in RGB color model are colors that have the same values for Red, Green and Blue. For example, #606060 is a grayscale color, while #FF0055 is not.

// In order to correctly convert a color to grayscale, one has to use luminance Y for Red, Green and Blue components. One can calculate luminance Y through the formula introduced in the NTSC standard:

// Y = 0.299 * R + 0.587 * G + 0.114 * B
// This formula closely represents the average person's relative perception of the brightness of red, green, and blue light.

// Given a color in 6-digit hexidecimal notation #RRGGBB in upper case, convert it to grayscale #YYYYYY. The answer should be a string representing the color code in 6-digit hexidecimal notation in upper or lower case.

// Round the value of luminance Y to the closest integer.

// All inputs will be valid.

function rgbToGrayscale(str) {
  //Changes the hex value to a decimal.
  const hexToDecimal = (hex) => parseInt(hex, 16);

  //Stores the decimal values of Red, Green & Blue.
  const r = hexToDecimal(str.slice(1, 3));
  const g = hexToDecimal(str.slice(3, 5));
  const b = hexToDecimal(str.slice(5, 7));

  //Calculates the Luminance Y of the input string.
  const luminance = Math.round(r * 0.299 + g * 0.587 + b * 0.114);

  //Changes the Luminance decimal value back to hex.
  let hex = luminance.toString(16).toUpperCase();

  //If the value of hex is only one digit, pad the start with a zero.
  hex = hex.length < 2 ? hex.padStart(2, 0) : hex;

  //Returns the hex value repeated three times.
  return `#${hex.repeat(3)}`;
}
