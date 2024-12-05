"use strict";
//The sieve of Eratosthenes is one of the most efficient ways to find all primes smaller than n when n is smaller than 10 million or so
function sieve(n) {
  let arr = new Array(n + 1).fill(true);
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      count += 1;
      for (let j = i * i; j <= n; j = j + i) {
        arr[j] = false;
      }
    }
  }
  return console.log(count);
}

sieve(7);
