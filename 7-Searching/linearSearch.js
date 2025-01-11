"use strict";

const arr = [3, 7, 4, 3, 8, 9, 3, 32, 67, 54];

// const sortedArr = arr.sort((a, b) => a - b);
console.log(arr);

const linearSearch = (arr, target) => {
  let count = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === target)
      console.log(` Target Value ${target} found at Index ${i}`);
  }
  return -1;
};

// linearSearch(arr, 5);

const globalLinearSearch = (arr, target) => {
  let results = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === target) results.push(i);
  }
  if (results.length === 0) return -1;
  return results;
};

console.log(globalLinearSearch(arr, 3));
