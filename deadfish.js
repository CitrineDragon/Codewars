function parse(data) {
  let total = 0;
  let output = [];

  for (let char of data) {
    if (char === 'i') {
      total++;
    } else if (char === 'd') {
      total--;
    } else if (char === 's') {
      total *= total;
    } else if (char === 'o') {
      output.push(total);
    } else {
      continue;
    }
  }
  return output;
}
