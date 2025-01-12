"use strict";

// to find square root of an element X and return floor value of previous square if X is not a perfect square

// Implemented using binary Search

const squareroot = (X) => {
  if (X < 0) return -1;
  let start = 1;
  let end = X;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid === X) {
      return mid;
    } else if (mid * mid < X) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
};

// console.log(squareroot(12));
console.log(squareroot(100));
