'use strict';
// Factorial
// const factorial = function (n) {
//   let fact = 1;
//   if (n === 0) return fact;
//   for (let i = 2; i <= n; i++) {
//     fact = fact * i;
//   }
//   return fact;
// };
// console.log(factorial(5));
// Recursion
const factorial = function (n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(3));
