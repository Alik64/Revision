const { sum, nativeNull } = require("./intro");
describe("Sum function", () => {
  test("Should return sum of two values", () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(1, 3)).toEqual(4);
  });

  test("Should return value comparing to others", () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeLessThan(6);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });

  test("Should return sum of 2 float value", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
describe("nativeNull function", () => {
  test("Should return false tpo value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy(); // undefined , null , 0 , ''
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
