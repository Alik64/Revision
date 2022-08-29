/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
Waiting:fearNotLetter("abce") should return the string d.
Waiting:fearNotLetter("abcdefghjklmno") should return the string i.
Waiting:fearNotLetter("stvwx") should return the string u.
Waiting:fearNotLetter("bcdf") should return the string e.
Waiting:fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

function fearNotLetter(str) {
  console.log(str.charCodeAt(0));
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce")); //d
