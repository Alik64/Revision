// Your program must calculate the sum of the even digits in a number </N>
const N = parseInt(readline());

var total = Array.from(String(N), Number).reduce((acc, item) => {
  if (item % 2 == 0) {
    acc += item;
  }
  return acc;
}, 0);

console.log(total);
