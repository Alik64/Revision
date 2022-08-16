// https://www.geeksforgeeks.org/find-number-perfect-squares-two-given-numbers/

// const A = parseInt(readline());
// const B = parseInt(readline());

function countSquares(a, b) {
  let cnt = 0;

  for (let i = a; i <= b; i++)
    for (let j = 1; j * j <= i; j++) {
      if (j * j == i) {
        cnt++;
      }
    }

  return cnt;
}
// 2nd solution
function countSquares2(a, b) {
  return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}
console.log(countSquares(1, 5));
console.log(countSquares2(1, 10));
