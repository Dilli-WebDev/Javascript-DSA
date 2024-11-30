"use strict";
/* //***************  Naive solution 
// How to print a prime factor of a number?
// Naive solution: 
// Given a number n, write a function to print all prime factors of n. For example, if the input number is 12, then output should be “2 2 3” and if the input number is 315, then output should be “3 3 5 7”.

/
*********************************************************************************************************
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

// ***********Efficient Solution 1 *********************************************************************************
function primeFactor(n) {
  if (n <= 1) return ;
  let i;
  // traverse loop from 2 to sqrt(n)
  for (i = 2; i * i <= n; i++) {
    //  i* y = n => y = n/i
    // Runs until condition is true
    while (n % i === 0) {
      console.log(i);
      // reduce n for every iteration
      n = n / i;
    }
  }
  // to print n grater than 1 in lcm method , ex n = 28 , factor with power 1 will print here
  if (n > 1) console.log(i);
}
*/
// **********************Optimised Efficient Solution***************************************************************
// 1- Divisors always appear in pairs
// 30 : (1,30) (2,15) (3,10) (5,6)
// x * y =n , if x <= y => x * x = n => x = sqrt(n)
// ***************Conclude that traverse from  2 to sqrt(n) will give prime facors if it has other than 1 and n
// 2 - A number n can be written as multiplications of powers of prime factors
// 12 = 2 * 2 * 3=> here 2 has pow 2
// 450 = >  2* 3*3**5*5 => here 3 and 5 has pow 2

// Following are the steps to find all prime factors:

//     While n is divisible by 2 and 3, print 2 and divide n by 2 , print 3 and divide n by 3.
//     After step 1, n must be odd. Now start a loop from i = 5 to square root of n. While i divides n, print i and divide n by i, increment i by 6 and continue.
// check for n%i and N%i+2
//     If n is a prime number and is greater than 3, then n will not become 1 by above two steps. So print n if it is greater than 3.
function primeFactor(n) {
  if (n <= 1) return;
  // Explicitly Handling prime factors 2 and 3 and if condition true then reducing n by n/2 and n/3
  while (n % 2 === 0) {
    console.log(2);
    n = n / 2;
  }
  while (n % 3 === 0) {
    console.log(3);
    n = n / 3;
  }
  // Applying same rule for Checking prime numbers and incrementing by i+6
  for (let i = 5; i * i <= n; i = i + 6) {
    while (n % i === 0) {
      console.log(i);
      n = n / i;
    }
    while (n % (i + 2) === 0) {
      console.log(i + 2);
      n = n / (i + 2);
    }
  }
  // last prime factor has power 1 then that can be printed
  if (n > 3) {
    console.log(n);
  }
}
primeFactor(13);
