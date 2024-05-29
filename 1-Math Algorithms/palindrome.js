'use strict';
const isPalindrome = function (x) {
  // 1.first check if x is a number greater than 0

  // 2.then convert number to string  and split into array and then reverse those strings and then join and ocnvert to number and then compare with x

  return x > 0 ? x === +x.toString().split('').reverse().join('') : false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(185));
console.log(isPalindrome(12));
