// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
  const tills = new Array(n).fill(0);

  for (let i = 0; i < customers.length; i++) {
    let shortestLine = tills.indexOf(Math.min(...tills));
    tills[shortestLine] += customers[i];
  }

  return Math.max(...tills);
}
