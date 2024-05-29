'use strict';
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// and hash map is keys and values , obj[keys] num values being the keys : obj[keys] keys being the values

const twoSum = function (nums, target) {
  const hash = {}; // Stores seen numbers: {seenNumber: indexItOccurred}

  for (let i = 0; i < nums.length; i++) {
    // loop through all numbers
    const n = nums[i]; // grab the current number `n`.
    console.log(n);
    if (hash[target - n] !== undefined) {
      // check if the number we need to add to `n` to reach our target has been seen:
      return [hash[target - n], i]; // grab the index of the seen number, and the index of the current number
    }
    hash[n] = i; // update our hash to include the. number we just saw along with its index.
  }
  return []; // If no numbers add up to equal the `target`, we can return an empty array
};
console.log(twoSum([1, 2, 3], 5)); // [1, 2]
