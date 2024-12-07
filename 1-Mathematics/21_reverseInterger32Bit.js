"use strict";
/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

Constraints:

    -231 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let revNum = 0;
  let n = Math.abs(x);
  while (n !== 0) {
    let lastDigit = n % 10;
    revNum = revNum * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  revNum = x < 0 ? Number("-" + revNum) : revNum;
  if (revNum > Math.pow(2, 31) - 1 || revNum < Math.pow(-2, 31)) return 0;
  else return revNum;
};

console.log(reverse(-123));
console.log(reverse(1534236469));
