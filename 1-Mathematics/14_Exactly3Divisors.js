"use strict";
/*
Given a positive integer value n. The task is to find how many numbers less than or equal to n have numbers of divisors exactly equal to 3.

Examples:

Input: n = 6
Output: 1
Explanation: The only number less than 6 with 3 divisors is 4 which has 1, 2 and 4 as divisors.

Input: n = 10
Output: 2
Explanation: 4 and 9 have 3 divisors. 
    Idea: After having a close look at the examples mentioned above, you have noticed that all the required numbers are perfect squares and that too of only prime numbers. 

    Proof: Suppose the number is N, and it is a perfect square with square root X such that X is prime.

    Now if we find the factors of N, it will always have following combinations:

        1*N
        X*X

    Therefore the required numbers will have only three numbers as their divisors:

        1, 
        that number itself, and 
        just a single divisor in between 1 and the number.

 */

// Sieve of Eratothenes to find factors of N
function divisors(n) {
  let arr = new Array(n + 1).fill(true);
  arr[0] = arr[1] = 0;
  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      // will mark all mulitples of i=  2,3,5,7 .... as false
      for (let j = i * i; j <= n; j = j + i) {
        arr[j] = false;
      }
    }
  }
  console.log(arr);
  let count = 0;
  for (let i = 0; i * i <= n; i++) {
    if (arr[i] === true) {
      count = count + 1;
    }
  }
  return console.log(count);
}
divisors(10);