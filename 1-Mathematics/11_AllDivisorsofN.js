"use strict";
// Find all divisors of an number
// **********Naive Solution*****************************************************************
/* 
function allDivisors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) console.log(i);
  }
}
 */
// ***********************Efficent Solution********************
// 1- Divisors always appear in pairs
// 30 : (1,30) (2,15) (3,10) (5,6)
// x * y =n , if x <= y => x * x = n => x = sqrt(n)

// Not sorted order
// Pair is x,y = n , if x is found then to other pair y , find n/i
/* function allDivisors(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
      // to find other pair y
      if (i !== n / i) {
        console.log(n / i);
      }
    }
  }
} */
// ********************Sorted Order***********************

function allDivisors(n) {
  // Divisors from 1 to sqrt(n) excluded
  let i;
  for (i = 1; i * i < n; i++) {
    if (n % i === 0) console.log(i);
  }
  // Divisors from sqrt(n) to n
  for (; i >= 1; i--) {
    if (n % i === 0) console.log(n / i);
  }
}

allDivisors(100);
console.log("second Input");
allDivisors(7);
