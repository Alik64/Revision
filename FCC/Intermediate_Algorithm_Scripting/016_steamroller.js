/*
 * Steamroller
 * Flatten a nested array. You must account for varying levels of nesting.
 * Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
 * Global variables should not be used.
 * steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
 */

function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
