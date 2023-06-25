// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
  let one = new Object();
  let two = new Object();

  for (let i = 0; i < str1.length; i++) {
    one[str1[i]] = (one[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    two[str2[i]] = (two[str2[i]] || 0) + 1;
  }

  const keys = Object.keys(two);

  for (key of keys) {
    if (!one.hasOwnProperty(key) || one[key] < two[key]) {
      return false;
    }
  }
  return true;
}
