let emptyArr = [];
let arr = [1, 5, 2, 3, 7];
function average(arr) {
  if(arr.length === 0){
    return 0
  }
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }
  return summ / arr.length;
}
console.log("average(arr) ==>", average(arr));
console.log("average(empytArr) ==>", average(emptyArr));
