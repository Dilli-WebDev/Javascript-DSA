"use strict";
// Anagram sorting
const str = "zebra";
const transform = str.split("").sort().join("");
// console.log(transform);

//Group Anagrams

const groupAnagrams = function (strs) {
  const sortedStrs = strs.map((word) => word.split("").sort().join(""));
  // console.log(strs);
  // console.log(sortedStrs);
  const hash = {};
  for (let i = 0; i < strs.length; i++) {
    const char = sortedStrs[i];
    // console.log(char);
    // console.log(strs[i]);
    if (!hash[char]) {
      hash[char] = [strs[i]];
      // console.log(hash);
    } else {
      hash[char].push(strs[i]);
    }
  }
  return hash;
};

const arr = ["eat", "tea", "bat", "tan", "ate", "nat"];
console.log(groupAnagrams(arr));
const str1 = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";
// console.log(str1.substring(6, 30));
// console.log(str.slice(-10, -1));
