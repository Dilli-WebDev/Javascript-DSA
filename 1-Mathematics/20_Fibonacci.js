"use strict";
//  Fibonacci series of n
// 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34

// Naive Method

function fibonacci(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
    console.log(i);
  }
}

fibonacci(5);
