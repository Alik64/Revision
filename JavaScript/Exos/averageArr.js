var arr = [1, 5, 2, 3, 7];

function average(arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }
  return summ / arr.length;
}
console.log("average(arr) ==>", average(arr));
