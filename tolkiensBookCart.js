// https://www.codewars.com/kata/59a2666349ae65ea69000051/train/javascript

// Tolkein's publisher wishes to implement an online store for the "Lord of the Rings" and "The Hobbit" books. Each book costs $10. However, if 2 titles are purchased, a 5% discount will be received, i.e. purchasing "Fellowship of the Ring" and "Two Towers" will cost $19. If 3 different titles are purchased, a 10% discount will be received. The purchase of all 4 different titles will receive a 20% discount. An additional single title will be full-price.

// The encoding of an order will be in the form of strings in an array. For example: [“F”, “T”, “R”, “H”, “H”] is the encoding of 2 copies of "The Hobbit" and a single copy of each of the titles in the "Lord of the Rings" trilogy.

// The expected output is a number. E.g. 42 is the expected output for the example above. The output should be the cheapest total cost. For example - if the book order is ["F", "T", "H", "F", "T", "R"], valid total costs include (3*10 discounted by 10%) + (3*10 discounted by 10%) and (4*10 discounted by 20%) + (2*10 discounted by 5%). The cheapest total cost is 51.

// This is a slightly simplified version of http://codingdojo.org/kata/Potter/

function calculateCartTotal(cart) {
  let obj = {};

  //Stores the count of each book in obj
  for (let book of cart) {
    obj[book] = (obj[book] || 0) + 1;
  }

  //Creates an array of the counts and sorts smallest to largest
  let arr = Object.values(obj).sort((a, b) => a - b);

  //Stores total price
  let total = 0;

  //Loop through our array of book counts
  for (let i = 0; i < arr.length; i++) {
    //If the previous count is the same as the current count; skip to the next
    if (arr[i] === arr[i - 1]) {
      continue;
      //This is a complete set. Multiply 40 * the value of arr[i] and then by .8 to give the 20% discount.
    } else if (arr.length - i === 4) {
      total += 40 * arr[i] * 0.8;
      //These are a set of 3. Multiply 30 * the value of arr[i] and then by .90 to give the 10% discount.
    } else if (arr.length - i === 3) {
      total += 30 * arr[i] * 0.9;
      //These are a set of 2. Multiply 20 * the value of arr[i] and then by .95 to give the 5% discount.
    } else if (arr.length - i === 2) {
      total += 20 * arr[i] * 0.95;
      //These are individuals. Multiply 10 * the value of arr[i]. Individuals get no discount
    } else if (arr.length - i === 1) {
      total += 10 * arr[i];
    }
    //Subtract the value of the current index from all values, these books have already been added to the total
    arr = arr.map((el) => el - arr[i]);
  }
  return total;
}
