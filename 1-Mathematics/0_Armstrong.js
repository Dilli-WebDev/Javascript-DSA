"use strict";
// Armstrong number is a number that is equal to the sum of cubes of its digits.
// 153,371,1

function isArmstrong(n) {
  let copy = n;
  let sum = 0;
  while (copy !== 0) {
    let digits = copy % 10;
    sum = sum + digits * digits * digits;
    copy = copy / 10;
  }

  return sum === n;
}

const n = 111;
if (isArmstrong(n)) {
  console.log(`Armstong number`);
} else {
  console.log(`Not a Armstong number`);
}
