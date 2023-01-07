const WIDTH = process.argv[2];
const HEIGTH = process.argv[3];
const heightLimit = HEIGTH - 1; // 2
const widthLimit = WIDTH - 1; // 4
const BAR = "-";
const PILE = "|";
const CORNER = "o";
const SPACE = " ";

console.log("width:", WIDTH, "height:", HEIGTH);

for (let i = 0; i <= heightLimit; i++) {
  let line = [];
  for (let j = 0; j <= widthLimit; j++) {
    if (
      (i === 0 && j === 0) ||
      (i === 0 && j === widthLimit) ||
      (i === heightLimit && j === 0) ||
      (i === heightLimit && j === widthLimit)
    ) {
      line.push(CORNER);
      continue;
    }
    if (i > 0 && i < heightLimit) {
      if (j === 0 || j === widthLimit) {
        line.push(PILE);
        continue;
      }
      line.push(SPACE);
      continue;
    }
    line.push(BAR);
  }
  console.log(line.join(""));
}
