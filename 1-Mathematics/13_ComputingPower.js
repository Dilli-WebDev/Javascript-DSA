"use strict";

// Naive Solution
/* 
function myPow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * x;
  }
  return console.log(result);
}
 */

// Recusrive Solution Time and Space Complexity = Theta(log n)

function myPow(x, n) {
  // base case for recursion
  if (n === 0) {
    return 1;
  }
  // if n is even
  let temp = myPow(x, Math.floor(n / 2));
  temp = temp * temp;
  if (n % 2 === 0) {
    return temp;
  } else {
    return temp * x;
  }
}

console.log(myPow(3, 2));
console.log(3 ** 2);
