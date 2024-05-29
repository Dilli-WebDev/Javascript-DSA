'use strict';

// const maxProfit = function (prices) {
//   let globalVariable = 0;
//   [7,6,7,3,1], lenght of array is 5 , so should run till i = 3 and j= 4 , cannot run for i = 4 , becuase no value after that
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const currentValue = prices[j] - prices[i];
//       if (currentValue > globalVariable) globalVariable = currentValue;
//     }
//   }
//   return globalVariable;
// };

// Greedy Algorithm
const maxProfit = function (prices) {
  return profit;
};

// [7, 1, 5, 3, 6, 4]
// min = 7 => 1
// profit 0 => 5-1 = 4 => 6-1 = 5

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
