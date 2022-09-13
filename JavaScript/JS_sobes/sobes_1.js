/*

let arr = [0, 1, 2];
console.log(Array.isArray(arr));

console.log((5 && 2) || 3); // 2
console.log(2 && 3); // 3
console.log((2 && 3) || 5); // 3
console.log((2 || 3) && 5); // 5

// [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
function arrDuplicator(arr) {
  //   return [...arr, ...arr];
  return arr.concat(arr);
}

console.log(arrDuplicator([1, 2, 3, 4, 5]));

let x = 7;
console.log(x);
console.log(0.1 + 0.2 - 0.2 == 0.1); // 
*/

// function f1(a, b) {
//   console.log(a, b);
// }
// let f2 = f1.bind(null, "foo");

// f2("bar", "baz");
for (var i = 0; i < 10; i++) {
  (function () {
    let j = i;
    setTimeout(function () {
      console.log(j);
    }, 0);
  })();
}

for (var i = 0; i < 10; i++) {
  setTimeout(
    function (j) {
      console.log(j);
    },
    0,
    i
  );
}
