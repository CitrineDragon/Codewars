function stockList(l, c) {
  if (l.length === 0) return '';
  let hash = {};
  let output = [];

  for (let item of l) {
    let [cat, num] = item.split(' ');
    hash[cat[0]] = (hash[cat[0]] || 0) + +num;
  }

  for (let cat of c) {
    output.push(`(${cat} : ${hash[cat] || 0})`);
  }

  return output.join(' - ');
}
