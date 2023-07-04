// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
  let strArr = str
    .split(' ')
    .filter((word) => word !== '')
    .map((word) => word[0].toUpperCase().concat(word.slice(1)))
    .join('');
  return strArr.length > 139 || strArr.length < 1 ? false : `#${strArr}`;
}
