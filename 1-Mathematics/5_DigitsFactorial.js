"use strict";
/* 
Given an integer N. Find the number of digits that appear in its factorial. 
Factorial is defined as, factorial(n) = 1*2*3*4……..*N and factorial(0) = 1.

Example 1:
Input: N = 5
Output: 3
Explanation: Factorial of 5 is 120.
Number of digits in 120 is 3 (1, 2, and 0) */

function digitsInFactorial(N) {
  if (N === 0) {
    return 0;
  }
  if (N === 1) {
    return 1;
  }
  let digits = 0;
  /*   Idea -
  Count digit = floor (log10 N!)) + 1
          Let Say N = 5
  = loor (log (1x2x3x4x5)) + 1
          
  = floor (log 1+ log 2+ log 3 + log 4 + log 5 ) + 1
            
  = floor (ε log(i) ) + 1
        i=1 10 */

  for (let i = 1; i <= N; i++) {
    digits = digits + Math.log10(i);
  }
  return Math.floor(digits) + 1;
}

console.log(digitsInFactorial(5));

// https://www.youtube.com/watch?v=fuFMZjvBwn0
