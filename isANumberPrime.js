// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

function isPrime(num) {
  //Non Primes must have at least one factor greater than 1 and less than it's square root.
  let sqrt = Math.floor(Math.sqrt(num));

  //If number is 2 return true, if the number is a multiple of two, return false;
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0 && num > 2) {
    return false;
  }

  //Loop through all odds up to the sqrt of num
  for (let i = 3; i <= sqrt; i += 2) {
    //If we find a factor of num, return false and exit
    if (num % i === 0) {
      return false;
    }
  }

  //Return true if the loop finishes and num is larger than 2. 0, 1 and negatives will return false.
  return num > 2;
}
