'use strict';
// this pattern uses Object or sets to collect values and compare them
// to avoid nested loops or O(N^2) operatiosn with arrays/strings
//  Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// First Naive solution
const same = function (arr1, arr2) {
  // first edge case if not same lenghth then return false immediately
  if (arr1.length !== arr2.length) return `Array not same length`;
  // first lopping through arrays
  for (let i = 0; i < arr1.length; i++) {
    // console.log(i);
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // if squared element is present , will always return a positive value , if not will return negative value
    if (correctIndex === -1) return `Not equal square of  arrays`;
    // Once compared , we can remove item from arr2 to eliminate duplicates
    // for [1, 1, 3], [4, 1, 9] it will return true if dont delete the value in arr2 after it was checked for the first time
    arr2.splice(correctIndex, 1);
  }
  return true;
};
console.log(same([1, 1, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [4, 8, 9]));
console.log(same([1, 2, 3], [4, 8, 9, 10]));
