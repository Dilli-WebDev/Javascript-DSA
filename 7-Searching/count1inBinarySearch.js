"use strict";

// O(log n) and O (log n ) is O (log n)
// Time Complexity : O(Log n)
// Space Complexity: O(1)

/* const binarySearch = (arr, X) => {
  let start = 0,
    n = arr.length;
  let end = n - 1;
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === X) {
      result = mid;
      // to find the left most index of an Number
      end = mid - 1;
    } else if (arr[mid] < X) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
};

const arr = [0,0,0,1,1,1];

const countOccurrences = (arr) => {
  if (arr[arr.length - 1] === 0) return 0;
  const first = binarySearch(arr, 1);
  console.log(`first Index of 1 is ${first}`);
  return arr.length - first;
};

console.log(countOccurrences(arr)); */

// ***********************************************************************
// Non Increasing Order
// arr = [1, 1, 1, 1, 1, 0, 0, 0]]

const binarySearch = (arr, X) => {
  let start = 0,
    n = arr.length;
  let end = n - 1;
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // mid = 2
    // mid = 1

    if (arr[mid] === X) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
};

const arr = [1, 1, 0, 0, 0];

const countOccurrences = (arr) => {
  const last = binarySearch(arr, 1);
  return last + 1;
};

console.log(countOccurrences(arr));
