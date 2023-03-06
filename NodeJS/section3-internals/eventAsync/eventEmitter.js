const EventEmitter = require("events");
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Congratulations!");
  }
});

// Subscribe to celebrity for Observer 2
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Wahooo!");
  }
});

// emit process event when programme is ready to exit
process.on("exit", (code) => {
  console.log(`Process exit event with code : ${code}`);
});

// Emit an event
celebrity.emit("race", "win");
celebrity.emit("race", "lose");
