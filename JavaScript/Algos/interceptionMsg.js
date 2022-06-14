/*
For every letter in msg, write an integer (E), 
representing the distance of that letter from the letter Z in the English alph.
for spaces, write a value -1

INPUT :
Line 1 : an Integer (N) for the number of letters to decrypt.
Next N lines : An integer (E) representing a single letter of the message.

OUTPUT: A lowercase string representing the decrypt message.

!!! => 1<= N <= 100

EX :  Input     Output
        5       hello
        18
        21
        14
        14
        11
*/
const N = 5;
const array = [18, 21, 14, -1, 11]; // hel o

function decoder(num) {
  if (num < 0) {
    return " ";
  }
  return String.fromCharCode(90 - num).toLowerCase();
}

function translator(n, arr) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(decoder(arr[i]));
  }
  return result.join("");
}

console.log("resultat ==>", translator(N, array));
