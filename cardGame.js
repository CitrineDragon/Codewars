// https://www.codewars.com/kata/61fef3a2d8fa98021d38c4e5/solutions/javascript

// DESCRIPTION:
// Alice and Bob are playing a game. There are n(1 < n < 10^18) cards on the table. The aim of the game is to collect the most cards. The rules:

// if the number of cards is even, the players can either take half of the cards from the stack, or only 1 card -- as they choose;
// if the number of cards is odd, the players must take 1 card.
// Alice starts the game.

// Return the maximum number of cards Alice can collect, if Bob plays optimally (tries to get as many cards as possible for himself).

// Example
// When there are 10 cards, Alice can collect maximum 8, like this:

// 1. Alice takes half of the 10 cards     (now has: 5)          -->  5 cards left
// 2. Bob must take 1 card                 (now has: 1)          -->  4 cards left
// 3. Alice takes half of the 4 cards      (now has: 5 + 2 = 7)  -->  2 cards left
// 4. Bob takes 1 (or half of the 2 cards) (now has: 1 + 1 = 2)  -->  1 card left
// 5. Alice takes the last card            (now has: 7 + 1 = 8)  -->  game over!

// Thus, Alice has 8 cards and Bob has 2

function cardGame(n) {
  let alice = 0n;
  let bob = 0n;

  while (n > 0) {
    let aliceTurn = true;
    if (n % 2n == 0 && aliceTurn === true) {
      let addToPlayer = BigInt(n) / 2n > 1n ? BigInt(n) / 2n : 1n;
      if (n == 4n) {
        alice += addToPlayer;
        n -= addToPlayer;
        aliceTurn = false;
      } else if ((n - addToPlayer) % 2n == 0) {
        alice += 1n;
        n -= 1n;
        aliceTurn = false;
      } else {
        alice += addToPlayer;
        n -= addToPlayer;
        aliceTurn = false;
      }
    }
    if (n % 2n != 0 && aliceTurn === true) {
      alice += 1n;
      n -= 1n;
      aliceTurn = false;
    }
    if (n % 2n == 0 && aliceTurn === false) {
      let addToPlayer = BigInt(n) / 2n > 1n ? BigInt(n) / 2n : 1n;
      if (n == 4n) {
        bob += addToPlayer;
        n -= addToPlayer;
        aliceTurn = true;
      } else if ((n - addToPlayer) % 2n == 0) {
        bob += 1n;
        n -= 1n;
        aliceTurn = true;
      } else {
        bob += addToPlayer;
        n -= addToPlayer;
        aliceTurn = true;
      }
    }
    if (n % 2n != 0 && aliceTurn === false) {
      bob += 1n;
      n -= 1n;
      aliceTurn = true;
    }
  }
  return alice;
}
