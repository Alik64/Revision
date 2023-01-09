const WIDTH = process.argv[2];
const HEIGHT = process.argv[3];
const heightLimit = HEIGHT - 1; // 2
const widthLimit = WIDTH - 1; // 4
const BAR = "-";
const PILE = "|";
const CORNER = "o";
const SPACE = " ";

console.log("width:", WIDTH, "height:", HEIGHT);
if (WIDTH <= 0 || HEIGHT <= 0) {
  console.log("Number should be positive ");
}
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

// second solution

const width = process.argv[2];
const height = process.argv[3];

// Vérifier que les arguments sont des nombres entiers positifs
if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
  console.log("Error: Invalid arguments");
  process.exit(1);
}

// Afficher le rectangle
for (let i = 0; i < height; i++) {
  if (i === 0 || i === height - 1) {
    console.log("o" + "-".repeat(width - 2) + "o");
  } else {
    console.log("|" + " ".repeat(width - 2) + "|");
  }
}
