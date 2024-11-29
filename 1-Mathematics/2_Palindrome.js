"use strict";

function palindrome(n) {
  // Using Built-in Methods
  // let str = Number(n.toString().split("").reverse().join(""));
  let temp = n,
    rev = 0;
  while (temp !== 0) {
    // This will give last digit of number
    let rem = temp % 10;
    // rev will be reversed number
    rev = rev * 10 + rem;
    // temp will be temp without its last digit
    temp = Math.floor(temp / 10);
  }

  return rev === n;
}

console.log(palindrome(363));
// console.log(palindrome(367));
// console.log(palindrome(4553));
