"use strict";

// Index of First Occurrence in Sorted in JS
/* const binarySearch = (arr, X) => {
  // your code here
  let low = 0,
    end = arr.length - 1;
  while (low <= end) {
    let mid = Math.floor((low + end) / 2);

    if (arr[mid] === X) {
      if (mid === 0 || arr[mid - 1] !== X) {
        return mid;
      } else {
        end = mid - 1;
      }
    }

    if (arr[mid] < X) {
      low = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const arr = [5, 10, 10, 20, 20, 30, 30, 40, 40, 40];

console.log(binarySearch(arr, 30));
 */
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
      end = mid - 1;
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
