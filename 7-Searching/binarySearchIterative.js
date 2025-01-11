"use strict";

// Preferred solution for binary Search because of
// Time Complexity: O(log n)
// Auxiliary Space: O(1)
const binarySearch = (nums, key) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor(start + end / 2);
    if (nums[middle] === key) {
      return middle;
    } else if (nums[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};

const arr = [3, 6, 8, 1, 2, 6, 5, 3, 2, 4];
arr.sort((a, b) => a - b);
console.log(arr);

console.log(binarySearch(arr, 4));
