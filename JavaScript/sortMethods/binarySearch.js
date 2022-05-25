let array = ["a", "b", "c", "d", "e", "f", "g", "h"];
let target = "g";
let search = function (item, target) {
  let left = 0;
  let right = item.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;

    if (target === item[mid]) return mid;
    if (target < item[mid]) right = mid - 1;
    if (target > item[mid]) left = mid + 1;
  }
  return -1;
};

console.log(search(array, target));
