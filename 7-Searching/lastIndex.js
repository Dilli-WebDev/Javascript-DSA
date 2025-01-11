"use strict";
// Index of last Occurrence in Sorted in JS
const binarySearch = (arr, X) => {
  // your code here
  let start = 0,
    n = arr.length;
  let end = n - 1;
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === X) {
      result = mid;
      start = mid + 1;
    } else if (arr[mid] < X) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
};

const arr = [10, 15, 20, 20, 50, 50];

console.log(binarySearch(arr, 50));
