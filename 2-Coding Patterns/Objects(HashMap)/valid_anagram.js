"use strict";
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// const isAnagram = function (s, t) {
//   const word1 = s.split('').sort().join('');
//   const word2 = t.split('').sort().join('');
//   return word1 === word2 ? true : false;
// };

// console.log(isAnagram('anagram', 'nagaram'));
/* 
const validAnagram = function (str1 , str2){
    if(str1.length !== str2.length) return false
  let string1Obj = {}
  let string2Obj = {}
  for ( let str of str1){
      string1Obj[str] = (string1Obj[str] || 0) +1
  }
  for ( let str of str2){
      string2Obj[str] = (string2Obj[str] || 0) +1
  }
  
  for( let key in string1Obj){
      if( !(key in string2Obj)) return false
      if(string1Obj[key] !== string2Obj[key]) return false
  }
  return true
}
*/

// Using Objects
function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  let obj = {};
  let obj1 = {};
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    obj[charS] = (obj[charS] || 0) + 1;
    obj1[charT] = (obj1[charT] || 0) + 1;
  }
  // for in loop if for objects
  for (const key in obj) {
    if (!(key in obj1)) return false;
    if (obj[key] !== obj1[key]) return false;
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awese)om")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
