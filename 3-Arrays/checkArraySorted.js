"use strict";

const isSorted = (arr) => {
  let res = 0;
  // [2,3,4,5]
  for (let i = 1; i < arr.length; i++) {
    if (arr[res] < arr[i]) {
      res = i;
      continue;
    } else {
      return "No";
    }
  }
  return "Yes";
};

console.log(isSorted([2, 3, 4, 5]));
console.log(isSorted([2, 8, 4, 5]));
console.log(isSorted([200, 100]));
