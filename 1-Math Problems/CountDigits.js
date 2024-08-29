"use strict";
// Given a number N, the task is to return the count of digits in this number.
// x > 0
function countDigits(n) {
  let count = 0;
  if (n === 0) {
    return 1;
  }
  while (n !== 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(48756));
console.log(countDigits(0));
