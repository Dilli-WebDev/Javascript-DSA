"use strict";

const reverseArray = (arr) => {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
    low++;
    high--;
  }
  return arr;
};

console.log(reverseArray([20, 10, 30]));
console.log(reverseArray([20, 10, 40, 30]));
