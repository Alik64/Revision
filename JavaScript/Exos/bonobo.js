/*
You are given a word of lowercase letters (a-z).

For each character, double it the second time it appears in the original word, triple it the third time etc.

Input

Line 1 A word x of lowercase letters.

Output
Line 1 The modified word.

Constraints : x contains no more than 100 characters.

Example     Input      Output
            bonobo     bonoobbooo
*/

// function repeatLetters(str) {
//   let arrFromStr = str.split("");

//   const count = {}; //{ b: 2, o: 3, n: 1 }

//   arrFromStr.forEach((element) => {
//     count[element] = (count[element] ?? 0) + 1;
//   });

//   return count;
// }

// function repeatLetters(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//     for (let j = 0; j < i; j++) {
//       if (str[i] === str[j]) {
//         result += str[i];
//       }
//     }
//   }
//   return result;
// }

const s = (s) => s.replace((n = /./g), (c) => c.repeat((n[c] = -~n[c])));
let str = "bonobo";
let str2 = "repetitive";

console.log("repeatLetters(str) =>", s(str)); // bonoobbooo
console.log("repeatLetters(str) =>", s(str2)); // repeetittiiveee
