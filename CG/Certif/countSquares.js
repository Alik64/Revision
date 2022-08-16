// https://www.geeksforgeeks.org/find-number-perfect-squares-two-given-numbers/

const A = parseInt(readline());
const B = parseInt(readline());

function countSquares(a, b) {
  let cnt = 0;

  // Traverse through all numbers
  for (let i = a; i <= b; i++)
    // Check if current number
    // 'i' is perfect square
    for (let j = 1; j * j <= i; j++) if (j * j == i) cnt++;

  return cnt;
}

console.log(countSquares(A, B));
