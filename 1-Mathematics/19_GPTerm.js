"use strict";
// Given the first 2 terms A and B of a Geometric Series. The task is to find the Nth term of the series.
// Gp term formula
// a * (r^n-1)
// r is common ratio => b/a
/*
Expected Time Complexity : O(logN)
Expected Auxilliary Space : O(1)

Constraints:
-100 <= A <= 100
-100 <= B <= 100
1 <= N <= 5 

function gpTerm(a, b, n) {
  if (n === 1) return a;
  let r = Math.pow(b / a, n - 1);
  return a * r;
}

console.log(gpTerm(2, 3, 1));
console.log(gpTerm(1, 2, 5));
*/

var keeps = [];

for (var i = 0; i < 3; i++) {
  keeps[i] = function keepsI() {
    return i;
  };
}

console.log(keeps[0]());
