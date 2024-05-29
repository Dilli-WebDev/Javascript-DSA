'use strict';
// Anagram sorting
const str = 'zebra';
const transform = str.split('').sort().join('');
console.log(transform);

//Group Anagrams

const groupAnagrams = function (strs) {
  const sortedStrs = strs.map(word => word.split('').sort().join(''));
  const hash = {};
  for (let i = 0; i < strs.length; i++) {
    const char = sortedStrs[i];
    // console.log(char);
    if (!hash[char]) {
      hash[char] = [strs[i]];
    } else {
      hash[char].push(strs[i]);
    }
  }
  return Object.values(hash);
};

const arr = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(arr));
