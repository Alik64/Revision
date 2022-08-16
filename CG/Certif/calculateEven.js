// Your program must calculate the sum of the even digits in a number </N>
let N = 123456789;

var total = Array.from(String(N), Number).reduce((acc, item) => {
  if (item % 2 == 0) {
    acc += item;
  }
  return acc;
}, 0);

console.log(total); // 20
