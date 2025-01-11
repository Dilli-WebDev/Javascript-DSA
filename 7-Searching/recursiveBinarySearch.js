"use strict";

// Not Preferred solution for binary Search because of
// Time Complexity: O(log n)
// Auxiliary Space: O(log n)

const recursiveBinarySearch = (arr, x, start, end) => {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) {
    return mid;
  } else if (arr[mid] > x) {
    return recursiveBinarySearch(arr, x, start, mid - 1);
  } else {
    return recursiveBinarySearch(arr, x, mid + 1, end);
  }
};

const arr = [10, 20, 30, 40, 50];
console.log(recursiveBinarySearch(arr, 25, 0, arr.length - 1));
console.log(recursiveBinarySearch(arr, 30, 0, arr.length - 1));
console.log(recursiveBinarySearch(arr, 10, 0, arr.length - 1));
