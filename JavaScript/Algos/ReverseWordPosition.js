/*
INPUT:
S, a string.
OUTPUT:
A string containing all the space-separated words of S in reverse order.

CONSTRAINTS:
S contains at least one word.
S contains less than 1000 characters. */

function reverse(str) {
  if (str.length === 0 || str.length > 1000) return;
  return str.split(" ").reverse().join(" ");
}

console.log(reverse("hello world"));
console.log('reverse("") ==>', reverse(""));
