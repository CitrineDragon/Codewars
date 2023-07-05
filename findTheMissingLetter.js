// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array) {
  //Creates an array of nums from char codes
  let charCodeArr = array.map((letter) => (letter = letter.charCodeAt(0)));
  //Returns the values that don't equal the starting value plus their index
  let missingNum = charCodeArr.filter(
    (num, ind) => charCodeArr[0] + ind !== num
  );
  //Returns the letter from the first num of the missingNum array.
  return String.fromCharCode(missingNum[0] - 1);
}
