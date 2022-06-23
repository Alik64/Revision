var countOdds = function (low, high) {
  let odd = [];
  for (let i = high; i >= low; i--) {
    if (i % 2 !== 0) {
      odd.push(i);
    }
  }
  return odd.length;
};
console.log(countOdds(8, 10));
console.log(countOdds(3, 7));
