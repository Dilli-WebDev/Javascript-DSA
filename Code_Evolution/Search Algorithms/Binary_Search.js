'use strict';

const arr = [-5, 2, 4, 6, 10];

const binarySearch = function (arr, target) {
  // initializing leftinfex pointer and right index pointer
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  // Loop should excute till left <= right

  while (leftIndex <= rightIndex) {
    // to find middle index , add leftindex + rightIndex /2
    let middleIndex = Math.floor(leftIndex + rightIndex / 2);
    // checking if arr[middleIndex] is equal to target then return
    // arr = [-5, 2, 4, 6, 10] target 6
    if (arr[middleIndex] === target)
      return `Target Value ${target} is in Index ${middleIndex}`;
    if (target > arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
};

console.log(binarySearch(arr, 10));
