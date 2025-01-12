"use strict";

const findLargestElement = (arr) => {
  // Variable to store the largest element
  let res = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[res]) res = i;
  }
  return res;
};

console.log(findLargestElement([10, 4, 20, 20]));
