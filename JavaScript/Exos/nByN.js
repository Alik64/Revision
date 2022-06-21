/*
The program:
You are given a text grid of size N by N
Your program must output words which are placed on the main and the secondary diagonals of the given grid.

The main diagonal is laid from the top-left to the bottom-right corner.
The secondary diagonal is laid from the top-right to the bottom-left corner.

INPUT:
Line 1: An integer number N representing the grid size.
Next N lines: N characters.

OUTPUT:
Two words from the diagonals separated by a whitespace

CONSTRAINTS:
- 0< N <10
- A grid contains only latin lowercase letters.

EXAMPLE:
Input       Output : main anti
4
mooa
oano
otio
ioon
*/

const input4 = [
  ["m", "o", "o", "a"],
  ["o", "a", "n", "o"],
  ["o", "t", "i", "o"],
  ["i", "o", "o", "n"],
]; // main anti
const input3 = [
  ["m", "o", "o"],
  ["o", "t", "i"],
  ["i", "o", "o"],
]; // mto oti

const input5 = [
  ["m", "o", "o", "a", "Z"],
  ["o", "A", "n", "o", "e"],
  ["o", "t", "i", "o", "g"],
  ["i", "o", "o", "N", "j"],
  ["i", "o", "o", "n", "k"],
]; // maink zoioi

const three = 3;
const four = 4;
const five = 5;

function transformer(n, input) {
  if (n <= 0 || n >= 10) return;

  let str = "";

  for (let i = 0; i < input.length; i++) {
    str += input[i][i].toLowerCase();
  }

  str += " ";

  for (let i = 0; i < input.length; i++) {
    let line = input[i];
    str += line[n - i - 1].toLowerCase();
  }

  return str;
}

console.log("transformer(n,input) ==>", transformer(three, input3)); // mto oti
console.log("transformer(n,input) ==>", transformer(four, input4)); // main anti
console.log("transformer(n,input) ==>", transformer(five, input5)); // maink zoioi
