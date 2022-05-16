const validateValue = require("./validateValue");

describe("validateValue", () => {
  test("smallest limit ", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Biggest limit ", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("Valide number ", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Smaller than limit ", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("Bigger than limit ", () => {
    expect(validateValue(101)).toBe(false);
  });
});
