// https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript

function orderWeight(str) {
  // Split the input string into an array of numbers
  const numbers = str.split(' ');

  // Custom sorting function to calculate the weight of a number
  function getWeight(num) {
    return num
      .toString()
      .split('')
      .reduce((t, c) => t + +c, 0);
  }

  // Sort the array based on the weight of numbers
  numbers.sort((a, b) => {
    const weightA = getWeight(a);
    const weightB = getWeight(b);

    // If the weights are the same, sort alphabetically
    if (weightA === weightB) {
      return a.localeCompare(b);
    }

    // Sort by weight
    return weightA - weightB;
  });
  // Convert the sorted array back to a string and return it
  return numbers.join(' ');
}
