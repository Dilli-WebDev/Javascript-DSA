"use strict";
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

// Using Inbuilt Method
// const countUniqueValues = function (arr) {
//   if (arr.length === 0) return 0;
//   const newarray = Array.from(new Set(arr));
//   return newarray.length;
// };
// console.log(countUniqueValues([]));
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// Using Two pointers , pointers going adjacent
const countUniqueValues = function (input) {
  if (input.length === 0) return 0;
  let i = 0;
  // let count = 0;

  for (var j = 1; j < input.length; j++) {
    // countUniqueValues([-2,-1,-1,0,1]) // 4
    if (input[i] !== input[j]) {
      i++;
      // count++;
      // j will automatically increment , now j value will be assigned to i value
      input[i] = input[j];
    }
  }

  // return count + 1;
  return i + 1;
};

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// countUniqueValues([1,1,1,1,1,2]) // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(isNaN("100"));