setTimeout(() => {
  console.log("1", "is the lonliest number");
}, 0);
setTimeout(() => {
  console.log("2", "can be as bad as one");
}, 10);

Promise.resolve("hi").then((data) => console.log("2", data));

console.log("3", "is a crowd");
