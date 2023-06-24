// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript

function solution(number) {
  let result = '';
  const romanSymbols = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];

  for (let i = 0; i < romanSymbols.length; i++) {
    while (number >= romanSymbols[i].value) {
      result += romanSymbols[i].symbol;
      number -= romanSymbols[i].value;
    }
  }

  return result;
}
