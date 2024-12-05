"use strict";
// Given a number N, the task is to return the count of digits in this number.
// x > 0
//  Divide / will give quotient
function countDigits(n) {
  let count = 0;
  let sum = 0;
  let temp = n;
  if (n === 0) {
    return 1;
  }
  while (n !== 0) {
    // % will give remiander
    temp = n % 10;
    // to print sum of digits
    sum = sum + temp;
    n = Math.floor(n / 10);
    // console.log(n);
    // to print count of digits
    count++;
  }
  return `sum : ${sum}  and count : ${count}`;
}

console.log(countDigits(48756));
console.log(countDigits(0));
