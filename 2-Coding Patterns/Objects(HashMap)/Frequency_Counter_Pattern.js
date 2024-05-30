"use strict";
// this pattern uses Object or sets to collect values and compare them
// to avoid nested loops or O(N^2) operatiosn with arrays/strings
//  Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// First Naive solution
// const same = function (arr1, arr2) {
//   // first edge case if not same lenghth then return false immediately
//   if (arr1.length !== arr2.length) return `Array not same length`;
//   // first lopping through arrays
//   for (let i = 0; i < arr1.length; i++) {
//     // console.log(i);
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     // if squared element is present , will always return a positive value , if not will return negative value
//     if (correctIndex === -1) return `Not equal square of  arrays`;
//     // Once compared , we can remove item from arr2 to eliminate duplicates
//     // for [1, 1, 3], [4, 1, 9] it will return true if dont delete the value in arr2 after it was checked for the first time
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// };
// console.log(same([1, 1, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [4, 8, 9]));
// console.log(same([1, 2, 3], [4, 8, 9, 10]));

// Refactored code using Objects
const sameRefactored = function (arr1, arr2) {
  // first edge case if not same lenghth then return false immediately
  if (arr1.length !== arr2.length) return `Array not same length`;
  // Creating two new Objects
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // Common Pattern
  for (let key of arr1) {
    // short Circuiting, Checking if counter1 has key already , if not assign 0 + 1
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }
  console.log(frequencyCounter1);
  for (let key of arr2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }
  console.log(frequencyCounter2);
  // for in loop for Objects
  for (let key in frequencyCounter1) {
    // first checking if Counter 1 key** 2 is in counter 2
    if (!(key ** 2 in frequencyCounter2)) return false;
    // console.log(key ** 2);
    // now checking values of both objects
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }
  return true;
};

console.log(sameRefactored([1, 2, 3], [4, 1, 9]));
console.log(sameRefactored([1, 2, 2], [4, 1, 4]));
// console.log(sameRefactored([1, 2, 3], [4, 8, 9, 10]));
