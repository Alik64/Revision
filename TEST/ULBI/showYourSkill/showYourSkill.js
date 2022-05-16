const showYourSkill = (number) => {
  switch (true) {
    case number === null:
      return "Warning: Can't use 'null' as an argument.";
    case isNaN(number):
      return `Warning: "${number}" is a String, should only use an integer!`;
    case number < 0:
      return "Warning: Can't use negative numbers!";
    case number < 3:
      return "Noob";
    case number < 5:
      return "Beginner";
    case number < 7:
      return "Medium";
    case number < 9:
      return "Advanced";
    case number < 13:
      return "Pro";
    case number < 15:
      return "Master";
    case number === 15:
      return "God";
    case number > 15:
      return `Warning:${number} is out of range, abd should be > 0 and <= 15`;
  }
};

function testAllSkills() {
  for (let i = 0; i <= 15; i++) {
    console.log(i, showYourSkill(i));
  }
  console.log(showYourSkill("hehe"));
  console.log(showYourSkill(null));
  console.log(showYourSkill(-1));
}
testAllSkills();
module.exports = showYourSkill;
