"use strict";

// https://www.youtube.com/watch?v=ff_L2torfww

const reverseinGroups = (arr, k) => {
  const n = arr.length;
  for (let i = 0; i < n; i += k) {
    let start = i;
    let end = Math.min(n - 1, i + k - 1);

    // Code to reverse the elements in Array
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  return arr;
};

console.log(reverseinGroups([4, 8, 9, 10], 2));
