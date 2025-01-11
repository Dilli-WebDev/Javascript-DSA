"use strict";

// O(log n) and O (log n ) is O (log n)
// Time Complexity : O(Log n)
// Space Complexity: O(1)

const binarySearch = (arr, X, search = "last") => {
  let start = 0,
    n = arr.length;
  let end = n - 1;
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === X) {
      result = mid;
      search === "first" ? (end = mid - 1) : (start = mid + 1);
    } else if (arr[mid] < X) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
};

const arr = [10, 20, 20, 20, 20, 30];

const countOccurrences = (arr) => {
  const first = binarySearch(arr, 20, "first");
  if (first === -1) return 0;
  const last = binarySearch(arr, 20);
  return last - first + 1;
};

console.log(countOccurrences(arr));
