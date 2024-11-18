"use strict";

/* // Iterative Function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));
 */
/* 
// Recursive Function
// Recusrsive function should always have a base case that will end the recursion

function recursiveFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(3));
 */

// While loop function

function whileFactorial(n) {
  if (n === 0) {
    return 1;
  }
  // Initialization of index and fact
  let i = n,
    fact = 1;
  // Math.floor will give exact number and will terminate if equal to n = n
  while (Math.floor(n / i) !== n) {
    // fact = fact * i , i will decremetn each loop
    fact *= i;
    i--;
  }
  return fact;
}

console.log(whileFactorial(5));
