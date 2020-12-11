/* 
You are given a string containing characters A and B only. 
Your task is to change it into a string such that there are no matching adjacent characters. 
To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.
*/

function alternatingCharacters(s) {

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s.slice((i + 1), (i + 2));
      count++;
    }
  }

  return count;
}


console.log(alternatingCharacters('AAAA')); // 3
console.log(alternatingCharacters('BBBBB')); // 4
console.log(alternatingCharacters('ABABABAB')); // 0
console.log(alternatingCharacters('AAABBB')); // 4