const { sum, nativeNull } = require("./intro");

test("Sum should return sum of two values", () => {
  expect(sum(1, 3)).toBe(4);
  expect(sum(1, 3)).toEqual(4);
});
