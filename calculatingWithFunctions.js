// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

// function zero() {
//   let args = [].concat(...arguments);
//   switch (args[0]) {
//     case 'plus':
//       return 0 + args[1];
//     case 'minus':
//       return 0 - args[1];
//     case 'times':
//       return 0 * args[1];
//     case 'divide':
//       return Math.floor(0 / args[1]);
//     default:
//       return 0;
//   }
// }
// function one() {
//   let args = [].concat(...arguments);
//   switch (args[0]) {
//     case 'plus':
//       return 1 + args[1];
//     case 'minus':
//       return 1 - args[1];
//     case 'times':
//       return args[1];
//     case 'divide':
//       return Math.floor(1 / args[1]);
//     default:
//       return 1;
//   }
// }
// function two() {
//   let args = [].concat(...arguments);
//   switch (args[0]) {
//     case 'plus':
//       return 2 + args[1];
//     case 'minus':
//       return 2 - args[1];
//     case 'times':
//       return 2 * args[1];
//     case 'divide':
//       return Math.floor(2 / args[1]);
//     default:
//       return 2;
//   }
// }
// function three() {
//   let args = [].concat(...arguments);
//   switch (args[0]) {
//     case 'plus':
//       return 3 + args[1];
//     case 'minus':
//       return 3 - args[1];
//     case 'times':
//       return 3 * args[1];
//     case 'divide':
//       return Math.floor(3 / args[1]);
//     default:
//       return 3;
//   }
// }
// function four() {
//   let args = [].concat(...arguments);
//   switch (args[0]) {
//     case 'plus':
//       return 4 + args[1];
//     case 'minus':
//       return 4 - args[1];
//     case 'times':
//       return 4 * args[1];
//     case 'divide':
//       return Math.floor(4 / args[1]);
//     default:
//       return 4;
//   }
// }
// function five() {
//   let args = [].concat(...arguments);
//   switch (args[0]) {
//     case 'plus':
//       return 5 + args[1];
//     case 'minus':
//       return 5 - args[1];
//     case 'times':
//       return 5 * args[1];
//     case 'divide':
//       return Math.floor(5 / args[1]);
//     default:
//       return 5;
//   }
// }
// function six() {
//   let args = [].concat(...arguments);
//   switch (args[0]) {
//     case 'plus':
//       return 6 + args[1];
//     case 'minus':
//       return 6 - args[1];
//     case 'times':
//       return 6 * args[1];
//     case 'divide':
//       return Math.floor(6 / args[1]);
//     default:
//       return 6;
//   }
// }
// function seven() {
//   let args = [].concat(...arguments);
//   switch (args[0]) {
//     case 'plus':
//       return 7 + args[1];
//     case 'minus':
//       return 7 - args[1];
//     case 'times':
//       return 7 * args[1];
//     case 'divide':
//       return Math.floor(7 / args[1]);
//     default:
//       return 7;
//   }
// }
// function eight() {
//   let args = [].concat(...arguments);
//   switch (args[0]) {
//     case 'plus':
//       return 8 + args[1];
//     case 'minus':
//       return 8 - args[1];
//     case 'times':
//       return 8 * args[1];
//     case 'divide':
//       return Math.floor(8 / args[1]);
//     default:
//       return 8;
//   }
// }
// function nine() {
//   let args = [].concat(...arguments);
//   switch (args[0]) {
//     case 'plus':
//       return 9 + args[1];
//     case 'minus':
//       return 9 - args[1];
//     case 'times':
//       return 9 * args[1];
//     case 'divide':
//       return Math.floor(9 / args[1]);
//     default:
//       return 9;
//   }
// }

// function plus(num) {
//   return ['plus', num];
// }
// function minus(num) {
//   return ['minus', num];
// }
// function times(num) {
//   return ['times', num];
// }
// function dividedBy(num) {
//   return ['divide', num];
// }

function zero() {
  let args = [].concat(...arguments);
  return args[0] === 'plus'
    ? 0 + args[1]
    : args[0] === 'minus'
    ? 0 - args[1]
    : args[0] === 'times'
    ? 0 * args[1]
    : args[0] === 'divide'
    ? Math.floor(0 / args[1])
    : 0;
}
function one() {
  let args = [].concat(...arguments);
  return args[0] === 'plus'
    ? 1 + args[1]
    : args[0] === 'minus'
    ? 1 - args[1]
    : args[0] === 'times'
    ? 1 * args[1]
    : args[0] === 'divide'
    ? Math.floor(1 / args[1])
    : 1;
}
function two() {
  let args = [].concat(...arguments);
  return args[0] === 'plus'
    ? 2 + args[1]
    : args[0] === 'minus'
    ? 2 - args[1]
    : args[0] === 'times'
    ? 2 * args[1]
    : args[0] === 'divide'
    ? Math.floor(2 / args[1])
    : 2;
}
function three() {
  let args = [].concat(...arguments);
  return args[0] === 'plus'
    ? 3 + args[1]
    : args[0] === 'minus'
    ? 3 - args[1]
    : args[0] === 'times'
    ? 3 * args[1]
    : args[0] === 'divide'
    ? Math.floor(3 / args[1])
    : 3;
}
function four() {
  let args = [].concat(...arguments);
  return args[0] === 'plus'
    ? 4 + args[1]
    : args[0] === 'minus'
    ? 4 - args[1]
    : args[0] === 'times'
    ? 4 * args[1]
    : args[0] === 'divide'
    ? Math.floor(4 / args[1])
    : 4;
}
function five() {
  let args = [].concat(...arguments);
  return args[0] === 'plus'
    ? 5 + args[1]
    : args[0] === 'minus'
    ? 5 - args[1]
    : args[0] === 'times'
    ? 5 * args[1]
    : args[0] === 'divide'
    ? Math.floor(5 / args[1])
    : 5;
}
function six() {
  let args = [].concat(...arguments);
  return args[0] === 'plus'
    ? 6 + args[1]
    : args[0] === 'minus'
    ? 6 - args[1]
    : args[0] === 'times'
    ? 6 * args[1]
    : args[0] === 'divide'
    ? Math.floor(6 / args[1])
    : 6;
}
function seven() {
  let args = [].concat(...arguments);
  return args[0] === 'plus'
    ? 7 + args[1]
    : args[0] === 'minus'
    ? 7 - args[1]
    : args[0] === 'times'
    ? 7 * args[1]
    : args[0] === 'divide'
    ? Math.floor(7 / args[1])
    : 7;
}
function eight() {
  let args = [].concat(...arguments);
  return args[0] === 'plus'
    ? 8 + args[1]
    : args[0] === 'minus'
    ? 8 - args[1]
    : args[0] === 'times'
    ? 8 * args[1]
    : args[0] === 'divide'
    ? Math.floor(8 / args[1])
    : 8;
}
function nine() {
  let args = [].concat(...arguments);
  return args[0] === 'plus'
    ? 9 + args[1]
    : args[0] === 'minus'
    ? 9 - args[1]
    : args[0] === 'times'
    ? 9 * args[1]
    : args[0] === 'divide'
    ? Math.floor(9 / args[1])
    : 9;
}

function plus(num) {
  return ['plus', num];
}
function minus(num) {
  return ['minus', num];
}
function times(num) {
  return ['times', num];
}
function dividedBy(num) {
  return ['divide', num];
}
