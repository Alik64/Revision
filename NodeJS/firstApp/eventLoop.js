console.log("1");
setTimeout(() => {
  console.log("setTimeout2");
}, 500);
setTimeout(() => {
  console.log("setTimeout");
}, 1000);

setImmediate(() => {
  console.log("2");
});
setImmediate(() => {
  console.log("setImmediate");
});

console.log("3");
