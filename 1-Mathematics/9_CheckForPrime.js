"use strict";

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

console.log(checkPrime(2));
console.log(checkPrime(55));
console.log(checkPrime(37));
