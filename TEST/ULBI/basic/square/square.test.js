const square = require("./square");

describe("Square()", () => {
  test("should return square of given number", () => {
    expect(square(7)).toBe(49);
    expect(square(7)).not.toBeUndefined();
  });

  test("should use Math.pow methode 1 time if number > 1", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
  test("should use Math.pow methode 0 times if number === 1", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
