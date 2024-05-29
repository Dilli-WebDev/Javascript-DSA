'use strict';

// Power of two - Pseudocode
// n = 8
// 8/2 =4 (remainder 0)
// 4/2 = 2 (remainder 0)
// 2/2 = 1 (remainder 0)
// If remainder is not 0 in any step, 'n' is not a power of two
// If remainder is 0 and 'n' comes down to 1 eventually, n is a power of two.
// const powerofTwo = function (n) {
//   if (n < 1) return false;
//   let count = 0;
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//     count++;
//   }
//   return count;
// };

// console.log(powerofTwo(8));
// console.log(powerofTwo(7));
// console.log(powerofTwo(16));

// bit wise operstor
const powerofTwoBitwise = function (n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
};

console.log(powerofTwoBitwise(8));
console.log(powerofTwoBitwise(7));
console.log(powerofTwoBitwise(16));
