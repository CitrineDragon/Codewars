// https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript

function longestPalindrome(s) {
  if (!s || s.length === 0) {
    return 0;
  }

  let count = 1;

  function expand(l, r) {
    while (l >= 0 && r <= s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return r - l - 1;
  }

  for (let i = 0; i < s.length; i++) {
    const oddLength = expand(i, i);
    const evenLength = expand(i, i + 1);
    count = Math.max(count, oddLength, evenLength);
  }

  return count;
}
