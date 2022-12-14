// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

const magazine =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

function ransom(ran, mag) {
  ran = ran.replaceAll(',', '').replaceAll('.', '').split(' ');
  mag = mag.replaceAll(',', '').replaceAll('.', '').split(' ');

  let ranObj = {};
  let magObj = {};

  for (let word of ran) {
    ranObj[word] = ranObj[word] + 1 || 1;
  }
  for (let word of mag) {
    magObj[word] = magObj[word] + 1 || 1;
  }

  for (let word in ranObj) {
    if (magObj[word] === undefined || magObj[word] < ranObj[word]) {
      return false;
    }
  }
  return true;
}

console.log(ransom('sit ad est sint', magazine), true);
console.log(ransom('sit ad est love', magazine), false);
console.log(ransom('sit ad est sint in in', magazine), true);
console.log(ransom('sit ad est sint in in in in', magazine), false);
