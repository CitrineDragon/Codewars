// https://www.codewars.com/kata/514aa0dc21607ae236000017/train/javascript

// Functional closures can get overly attached. Set them straight!
// Why doesn't greet_abe() actually greet Abe?

var name = 'Abe';
function greet_abe(name = 'Abe') {
  return `Hello, ${name}!`;
}

name = 'Ben';
function greet_ben(name = 'Ben') {
  return `Hello, ${name}!`;
}
