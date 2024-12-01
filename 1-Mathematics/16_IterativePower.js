"use strict";
// iterative solution to compute power of a number
function power(x, y) {
  let res = 1;
  while (y > 0) {
    if (y & 1) {
      res = res * x;
    }
    y = y >> 1;
    x = x * x;
  }
  return res;
}

const x = 3;
const y = 5;

console.log("Power is " + power(x, y));
