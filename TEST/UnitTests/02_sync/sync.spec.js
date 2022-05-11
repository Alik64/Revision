const Lodash = require("./sync");
describe("Lodash: compact", () => {
  let _ = new Lodash();
  let array;

  beforeEach(() => {
    array = [42, null, true, 0, "", "hello"];
  });

  afterAll(() => {
    _ = new Lodash();
  });

  test("Should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });
  test("should remove falsy values from array", () => {
    const result = [42, true, "hello"];
    expect(_.compact(array)).toEqual(result);
  });
  test("should NOT contain falsy values", () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain("");
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain(null);
  });
});
describe("Lodash: groupBy", () => {
  let _ = new Lodash();
  test("shoul be defined", () => {
    expect(_.groupBy()).toBeDefined();
    expect(_.groupBy()).not.beUndefined();
  });
});
