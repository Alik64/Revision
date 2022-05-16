const showYourSkill = require("./showYourSkill");

describe("showYourSkill()", () => {
  test("should NOT accept negative numbers", () => {
    expect(showYourSkill(-1)).toBe("Warning: Can't use negative numbers!");
  });
  test("should only accept numbers between 0 and 15", () => {
    let number = 16;
    expect(showYourSkill(number)).toBe(
      `Warning:${number} is out of range, abd should be > 0 and <= 15`
    );
  });
  test("should return Noob for 0", () => {
    expect(showYourSkill(0)).toBe("Noob");
  });
  test("should return Master for 14", () => {
    expect(showYourSkill(14)).toBe("Master");
  });
  test("should return Pro for 12", () => {
    expect(showYourSkill(12)).toBe("Pro");
  });
  test("should not accept String as argument", () => {
    let str = "Hello world";
    expect(showYourSkill(str)).toBe(
      `Warning: "${str}" is a String, should only use an integer!`
    );
  });
});
