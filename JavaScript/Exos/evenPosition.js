function evenPosition(table, value) {
  let position = table.indexOf(value);
  if (position === 0) {
    return false;
  }
  return position % 2 === 0 ? true : false;
}
function oddPosition(table, value) {
  let position = table.indexOf(value);
  if (position === 0) {
    return true;
  }
  return position % 2 !== 0 ? true : false;
}

let arr = [4, 23, 45, 6, 5, 43, 23, 7, 65, 2, 1];
console.log("evenPosition(arr,7) : ", evenPosition(arr, 65)); //true
console.log("evenPosition(arr,4) : ", evenPosition(arr, 4)); //false
console.log("oddPosition(arr,7) : ", oddPosition(arr, 65)); //false
console.log("oddPosition(arr,4) : ", oddPosition(arr, 4)); //true
