'use strict';
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).
// var fib = function (n) {
//   //  0 and 1 are always constant
//   if (n <= 1) return n;
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   return arr[n];
// };

// console.log(fib(6));
// Recursive Solution
var fib = function (n) {
  //  0 and 1 are always constant
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6));
