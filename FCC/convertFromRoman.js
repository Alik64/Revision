const match = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function convertFromRoman(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (match[num[i]] < match[num[i + 1]]) {
      sum -= match[num[i]];
    } else {
      sum += match[num[i]];
    }
  }
  return sum;
}

console.log("convertFromRoman('XVI') : ", convertFromRoman("XVI"));
