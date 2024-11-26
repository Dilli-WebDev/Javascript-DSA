"use strict";
/* 
// Naive Method
// trailing means behind or last or follows up in the end
//  Divide / will give quotient
// Mod % will give Remainder
function trailZeros(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  console.log(fact);
  // fact(5) = 120
  // 120%10 = 0 and 120/10 = 12
  let countofZeros = 0;
  while (fact % 10 === 0) {
    countofZeros++;
    fact /= 10;
  }
  return countofZeros;
}

// console.log(trailZeros(100)); naive solution wont work because of n =100 will give big interger value
console.log(trailZeros(5));
console.log(trailZeros(10)); */

// *******************EFFICIENT SOLUTION****************
// every 2 and 5  prime factor till n factorial will give number of trailing zeros
// 5 prime factor is less than 2 so n/5 will give trailing zeros
// n/5 will give atleast one prime factor , why atleast ? becuase some numbers will give 2 prime factors like 25 , so to address  that
// 1 to 24 will be n/5 and 25 to 124 will be n/25 and then n/125 and increments in 5 power of n which is logn

// Execution
// First elaborate 5! = 5x4x3x2x1 = number of 5 is 1 , count of the  numbers that are divisible by 5 will be count of trailing 0
function trailingZeros(n) {
  // n! = 25
  let count = 0;
  // first elaborate 25! = 25x24x23x22x21x20x19x18x17x16x15x14x13x12x11x10x9x8x7x6x5x4x3x2x1 = (n/5) + (n/25) + (n/125) + ...
  for (let i = 5; i <= n; i = i * 5) {
    // First iteration (n/i) = 25/ 5 = 5 , count to 5 , increment i* 5 = 25
    // next iertation (25/25) = 1 and added to count is 6 , increment  i* 5 = 125
    // check condition i <=n , 125 <= 25 , Exits loop
    count = count + Math.floor(n / i);
  }
  return count;
}

console.log(trailingZeros(5));
console.log(trailingZeros(25));
// console.log(trailingZeros(251));

/*  for (let i = 5; n / i >= 1; i *= 5) {
  count += Math.floor(n / i);
}
 */
