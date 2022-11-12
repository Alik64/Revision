function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}
let sumTwoAnd = addTogether(2);

console.log(sumTwoAnd(3));
console.log(addTogether(2, 3));
