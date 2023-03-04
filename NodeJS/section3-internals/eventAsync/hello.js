const mission = process.argv[2];
if (!mission) {
  console.log("Please provide an argument!");
  return;
}
if (mission === "learn") {
  console.log("Time to write some Node code!");
} else {
  console.log(`Is ${mission} really more fun?`);
}
