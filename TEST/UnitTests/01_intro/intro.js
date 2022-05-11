// tester une fonction
function expect(value) {
  return {
    toBe: (exp) => {
      if (value === exp) console.log("succes");
      else console.log(`Value is ${value}, but expectation is ${exp}`);
    },
  };
}
const sum = (a, b) => a + b;

const nativeNull = () => null;
// expect(sum(42, 1)).toBe(43);
module.exports = { sum, nativeNull };
