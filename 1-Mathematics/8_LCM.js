"use strict";
// Least common muliple
// to take the max value of two numbers and then check divisiblity max/a and max/b
// increment max value

// naive solution

/* function lcm(a, b) {
  let max = Math.max(a, b);
  while (true) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  }
}

console.log(lcm(4, 6));
 */

// **************EFFICENT SOLUTION***********
// a*b = gcd(a,b) * lcm(a,b)
// to find lcm(a,b) = a*b /gcd(a,b)

function gcd(a, b) {
  //  base case for recursion
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(4, 6));
console.log(lcm(7, 3));
