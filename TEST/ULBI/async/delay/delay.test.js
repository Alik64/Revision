const delay = require("./delay");

describe("delay()", () => {
  test("should calculate sum of two argument passed in callback ", async () => {
    const sum = await delay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  });
});
