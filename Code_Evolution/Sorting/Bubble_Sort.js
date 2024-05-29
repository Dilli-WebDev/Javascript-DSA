'use strict';

const bubbleSort = function (array) {
  for (let i = 0; i < array.length - 1; i++) {
    console.log('entered', i);
    if (array[i] < array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  return array;
};
const arr = [8, 20, -2, 4, -6];
console.log(bubbleSort(arr));
