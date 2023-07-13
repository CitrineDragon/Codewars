// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
  //Creates an array of the passed arguments and maps through them.
  let arr = [r, g, b].map((el) => {
    //If the value is greater than 255, reassign the value of 255.
    if (el > 255) {
      el = 255;
    }
    //If the value is less than 0, reassign the value of 0.
    if (el < 0) {
      el = 0;
    }
    //Convert the value to hex, make it uppercase and ensure the result is two characters.
    return el.toString(16).toUpperCase().padStart(2, 0);
  });
  //Join the array and return the result.
  return arr.join('');
}
