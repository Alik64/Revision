const mapArrToStrings = require("./mapArrToStrings.js");

describe("mapArrToStrings", () => {
  test("should transform array of numbers in arr of strings", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("should transform array of mixed values in arr of strings", () => {
    expect(mapArrToStrings([1, 2, 3, null, undefined, "345"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("should return empty array if empty array passed to function", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });

  test("should return the same number of given valid values and returned values", () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
