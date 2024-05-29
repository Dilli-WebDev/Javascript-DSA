'use strict';
// const isAnagram = function (s, t) {
//   const word1 = s.split('').sort().join('');
//   const word2 = t.split('').sort().join('');
//   return word1 === word2 ? true : false;
// };

// console.log(isAnagram('anagram', 'nagaram'));

// Using Objects
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let obj = {};
  let obj1 = {};
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    obj[charS] = ++obj[charS] || 1;
    obj1[charT] = ++obj1[charT] || 1;
  }
  // for in loop if for objects
  for (const key in obj) {
    if (obj[key] !== obj1[key]) return false;
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
