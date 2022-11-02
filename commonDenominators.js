// https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript

// Common denominators

// You will have a list of rationals in the form

// { {numer_1, denom_1} , ... {numer_n, denom_n} }
// or
// [ [numer_1, denom_1] , ... [numer_n, denom_n] ]
// or
// [ (numer_1, denom_1) , ... (numer_n, denom_n) ]
// where all numbers are positive ints. You have to produce a result in the form:

// (N_1, D) ... (N_n, D)
// or
// [ [N_1, D] ... [N_n, D] ]
// or
// [ (N_1', D) , ... (N_n, D) ]
// or
// {{N_1, D} ... {N_n, D}}
// or
// "(N_1, D) ... (N_n, D)"
// depending on the language (See Example tests) in which D is as small as possible and

// N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
// Example:
// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
// Note:
// Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.

// Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

function convertFrac(lst) {
  let denoms = lst.map((el) => el[1]).sort((a, b) => b - a);
  for (let i = 1; i < 10000; i++) {
    if (denoms.every((el) => (denoms[0] * i) % el === 0)) {
      let lcd = denoms[0] * i;
      return lst.map((el) => `(${el[0] * (lcd / el[1])},${lcd})`).join('');
    }
  }
}
