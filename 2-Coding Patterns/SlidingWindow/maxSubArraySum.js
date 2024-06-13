// Write a function called maxSubarraySum which accepts
// an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive
// elements in the array.

// Brute force approach O(n^2) - Nested loops
const maxSubarraySum = function (arr, n) {
  if (arr.length < n) return 0;

  // declaring a max variable
  let maxsum = -1;
  for (let i = 0; i < arr.length - n + 1; i++) {
    // every time new temp varibale should be intialized for each i iteration
    let temp = 0;
    // now j has to run until n times from i to j
    for (let j = 0; j < n; j++) {
      temp = temp + arr[i + j];
      // temp will add number from i to j
      // i+j becuase to start j from next element of i
    }
    // comparing current temp with max value , if greater then reassign maxSum
    if (temp > maxsum) {
      maxsum = temp;
    }
  }
  return maxsum;
};
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // null
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
// console.log(maxSubarraySum([], 4)); // 0

// Applying sliding Window
//   SLIDING WINDOW
// This pattern involves creating a
// window which can either be an array or
// number from one position to another
// Depending on a certain condition, the
// window either increases or closes (and a
//         new window is created)
// Very useful for keeping track of a subset of
//       data in an array/string etc.

const maxSumSubArraySilding = function (arr, n) {
  if (arr.length < n) return 0;

  // declaring a max variable
  let maxsum = 0;
  for (let i = 0; i < n; i++) {
    maxsum += arr[i];
  }
  let tempsum = maxsum;
  for (let i = n; i < arr.length; i++) {
    tempsum = tempsum - arr[i - n] + arr[i];
    maxsum = Math.max(maxsum, tempsum);
  }
  return maxsum;
};
// console.log(maxSumSubArraySilding([1, 2, 5, 2, 8, 1, 5], 4));
const obj = {
  name: "Vishal",
  course: "DSA with Vishal",
};
// console.log(JSON.stringify(obj));

const s = "   fly me   to   the moon  ";
const b = s.trim();
console.log(b);
const a = b.split(" ");
console.log(a[a.length - 1].length);
