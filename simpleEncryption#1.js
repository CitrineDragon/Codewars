// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  if (n <= 0 || !text) {
    return text;
  }
  let newStr = text;
  while (n > 0) {
    let evens = [...newStr].filter((el, i) => i % 2 === 0);
    let odds = [...newStr].filter((el, i) => i % 2 !== 0);
    newStr = odds.concat(evens).join('');
    n--;
  }
  return newStr;
}

function decrypt(text, n) {
  if (n <= 0 || !text) {
    return text;
  }
  let mid = text.length / 2;
  let first = [...text].slice(mid);
  let second = [...text].slice(0, mid);
  let output = [];
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === i - 1) {
      output.push(second[i]);
      output.push(first[i]);
    } else {
      output.push(first[i]);
      output.push(second[i]);
    }
  }
  return decrypt(output.join(''), n - 1);
}
