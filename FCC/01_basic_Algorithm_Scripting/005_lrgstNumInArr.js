function largestOfFour(arr) {
  let newAr = arr.map((arr) => Math.max(...arr));
  return newAr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
