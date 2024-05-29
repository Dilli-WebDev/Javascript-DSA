'use strict';
/*


console.log(factorial(5));

// String count
const stringCount = function (str) {
  // declare an object to hold values
  let result = {};
  // const exceptions = ['!', '@', ';', ' '];
  // convert str to lowercase and remove space and put it in array.
  const string = str
    .toLowerCase()
    .split(' ')
    .map(word => {
      // [a-z0-9]
      if (/[a-z]/.test(word)) return word;
    })
    .join('');
  console.log(string);
  // put the characters one by one inside object with count as 1 and an if condition if the value is already in , then increment
  for (let n of string) {
    // result[n] > 0 ? result[n]++ : (result[n] = 1);
    // object bracket Notation
    result[n] = ++result[n] || 1;
  }
  // return the object
  return result;
};
console.log(stringCount(' Hi There  1 2 3 ; ! @'));

// Prefix and Postfix
let a = 3;
let b = 3;
console.log(a++);
console.log(++b);
console.log(a);

*/
