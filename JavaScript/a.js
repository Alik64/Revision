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
