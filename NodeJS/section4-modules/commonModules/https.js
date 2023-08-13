const { read, send } = require("./internals");

function fetchData(url, data) {
  send(url, data);
  return read();
}

const receivedData = fetchData("https://www.google.com", "hello world mf!");
console.log(receivedData);
//to see require cash
// console.log(require.cache);
