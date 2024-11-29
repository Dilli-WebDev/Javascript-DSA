"use strict";
// GCD of two numbers
// if a= 4 and b = 6
// GCD is 2 , greatest common divisor is 2 for 4 and 6
// Naive Solution
// to take the min value of two numbers and then check divisiblity a/minvalue and b/minvalue
// decrement minvalue is not divisible

/* function naiveGCD(a, b) {
  let res = Math.min(a, b);
  while (res > 0) {
    if (a % res === 0 && b % res === 0) return res;
    res--;
  }

  return res;
}

console.log(naiveGCD(4, 6));
 */
// ****************EUCLIDEAN ALGORITHM*************
// GCD(a,b) = GCD(b,remainder of a/b)
// drastically reducing the value of a

function gcd(a, b) {
  //  base case for recursion
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

console.log(gcd(4, 6));
console.log(gcd(10, 15));
console.log(gcd(15, 10));
