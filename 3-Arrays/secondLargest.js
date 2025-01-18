"use strict";

// to find second largest element in an array

// using built - in methods
// this will not give distinct element , it will removed duplicates and then sorted to give secodn largest element
/* const secondLargest = (arr) => {
  const newArray = [...new Set(arr)];
  newArray.sort((a, b) => b - a);
  // console.log(newArray[1]);

  return newArray[1];
}; */

// Using Naive Solution
// to give distinct elements of second largest

/* const secondLargest = (arr) => {
  arr.sort((a, b) => a - b);

  let largestElement = arr[arr.length - 1];
  let index = arr.length - 2;

  while (index >= 0 && arr[index] === largestElement) {
    index--;
  }

  return index === -1 ? -1 : arr[index];
}; */

// ************Optimized Solution***************

const secondLargest = (arr) => {
  let firstMax = -1;
  let secondMax = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    }
    if (arr[i] > secondMax && arr[i] < firstMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
};
//  O(n) - Time
// O(1) - Space

console.log(secondLargest([10, 10]));
console.log(secondLargest([8, 6, 6, 5, 4, 4, 1, 1]));
