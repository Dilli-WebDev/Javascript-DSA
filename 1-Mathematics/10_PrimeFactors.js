"use strict";
//*************** */ Naive solution
// first step is to check n is divisible only by prime numbers and only those will be printed

// function to checkPrime
function checkPrime(n) {
  if (n === 1) {
    return false;
  }
  if (n === 2 || n === 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function primeFactor(n) {
  // loop to check divisiblity from 2 to n-1
  for (let i = 2; i < n; i++) {
    // if condition to filter only prime factors
    if (checkPrime(i)) {
      // to print same power
      let x = i;
      while (n % x === 0) {
        console.log(i);
        // will check next power of i
        x = x * i;
      }
    }
  }
}

primeFactor(12);
