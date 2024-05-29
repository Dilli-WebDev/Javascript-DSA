'use strict';

// const isPrime = function (n) {
//   // first edge case is to check if less than 2 , any 0 , 1 and negative number should return false
//   if (n < 2) return false;

//   // i checked till n , because n is divisible by n
//   for (let i = 2; i < n; i++) {
//     return n % i === 0
//       ? `${n} is divisible by ${i} ,so not a prime number`
//       : 'Prime Number';
//   }
// };
// console.log(isPrime(13));
// console.log(isPrime(17));
// console.log(isPrime(4));
// console.log(isPrime(1));

// Optimized Primality Test
// Integers larger than the square root do not need to be checked because, whenever 'n=a*b', one
// of the two factors 'a' and 'b' is less than or equal to the square root of 'n'
// n=24, a 4 and b=6
// The square root of 24 is 4.89
// 4 is less than 4.89
// a is less than the square root of n
// n=35, a 5 and b=7
// The square root of 35 is 5.91
// 5 is less than 5.91
// a is less than the square root of n
const isPrime = function (n) {
  // first edge case is to check if less than 2 , any 0 , 1 and negative number should return false
  if (n < 2) return false;

  // i checked till n , because n is divisible by n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    return n % i === 0
      ? `${n} is divisible by ${i} ,so not a prime number`
      : 'Prime Number';
  }
};
console.log(isPrime(13));
