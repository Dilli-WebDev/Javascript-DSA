'use strict';
// Ques 1 Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.
// Input: [12, 35, 1, 10, 34, 1] >>>> Output: 34
// Input: [10, 5, 10] >>> Output: 5

// const secondLargest = function (arr) {
//   const newArr = Array.from(new Set(arr)).sort((a, b) => b - a);
//   console.log(newArr);
//   if (newArr.length >= 2) return newArr[1];
//   return -1;
// };

// console.log(secondLargest([12, 35, 1, 10, 34, 1]));
// console.log(secondLargest([10, 5, 10]));

// Optimised Approach
// [12, 35, 1, 10, 34, 1] Arr[i]
// secondLargest = -1
// largest = -1

// iteration 0
// [12, 35, 1, 10, 34, 1]
// Arr[0] 12 - satisifies first if
// secondLargest = -1
// largest = 12

// iteration 1
// [12, 35, 1, 10, 34, 1]
// Arr[1] 35 - satisfies first if
// secondLargest = 12
// largest = 35

// iteration 2
// [12, 35, 1, 10, 34, 1]
// Arr[2] 1 - doesnt satisfy both condition
// secondLargest = 12
// largest = 35

// iteration 3
// [12, 35, 1, 10, 34, 1]
// Arr[3] 10 - doesnt satisfy both condition
// secondLargest = 12
// largest = 35

// iteration 4
// [12, 35, 1, 10, 34, 1]
// Arr[4] 34 - satisfies else condition
// secondLargest = 34
// largest = 35

// iteration 5
// [12, 35, 1, 10, 34, 1]
// Arr[4] 1 - doesn't satisfy any condition and loop get over
// secondLargest = 34
// largest = 35

const secondLargestOptimized = function (arr) {
  let largestElement = -1;
  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      secondLargest = largestElement;
      largestElement = arr[i];
    } else if (arr[i] !== largestElement && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(secondLargestOptimized([12, 34, 1, 10, 35, 1]));
console.log(secondLargestOptimized([10, 5, 10]));

// Big O Time - O(n)
