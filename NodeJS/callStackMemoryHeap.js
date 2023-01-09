const number = 610; // allocate memory for 'number' in memory heap
const human = {
  first: "john",
  last: "Doe",
};

function subtractTwo(num) {
  return num - 2;
}
function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}
calculate();
/**
 * callstack
 */
