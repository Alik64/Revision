let incrementA = 1;
let incrementB = 1;

const c = ++incrementA;
const d = incrementB++;

console.log("incrementA", incrementA); // 2
console.log("incrementB", incrementB); // 2
console.log("c", c); // 2
console.log("d", d); // 1
