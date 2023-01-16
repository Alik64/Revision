// Callback Queue
setTimeout(() => {
  console.log("1", "is the lonliest number");
}, 0);
setTimeout(() => {
  console.log("2", "can be as bad as one");
}, 10);
// Job Queue / Microtask
Promise.resolve("hi").then((data) => console.log("2", data));

// Synchro
console.log("3", "is a crowd");
