'use strict';
/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

const arr = [1, 2, 3, 4, 5, 6, 7];
// const popArr = arr.pop();
// console.log(popArr);
// const unshiftArray = arr.unshift(popArr);
// console.log(unshiftArray);
// console.log(arr);

// const rotateArray = function (array, k) {
//   for (let i = 0; i < k; i++) {
//     arr.unshift(arr.pop());
//   }
//   return arr;
// };

// console.log(rotateArray(arr, 3));

//Inbuilt
// const rotateArray = function (array, k) {
//   let size = array.length;
//   console.log(size);
//   if (size > k) {
//     k = k % size;
//     // k = 3
//     console.log(`value of k : ${k}`);
//   }
//   // 7 - 3 = 4
//   const rotate = array.splice(size - k, size);
//   console.log(rotate);
//   array.unshift(...rotate);
//   return arr;
// };

// console.log(rotateArray(arr, 3));

//Optimized
const rotateArrayOptimised = function (array, k) {
  let size = array.length;
  console.log(size);
  if (size > k) {
    k = k % size;
    // k = 3 % 7
    console.log(`value of k : ${k} and size : ${size}`);
  }
  // const arr = [1, 2, 3, 4, 5, 6, 7];

  reverse(array, 0, array.length - 1);
  // [7,6,5,4,3,2,1]
  reverse(array, 0, k - 1);
  // [5,6,7,4,3,2,1]
  reverse(array, k, array.length - 1);
  // [5,6,7,1,2,3,4]
  function reverse(nums, left, right) {
    while (left < right) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }

  return arr;
};

console.log(rotateArrayOptimised(arr, 3));
