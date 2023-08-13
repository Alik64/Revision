const internals = require("./internals");
// const { read } = require("./internals/response");
// const { send } = require("./internals/request");

function fetchData(url, data) {
  internals.request.send(url, data);
  return internals.response.read();
}

const receivedData = fetchData("https://www.google.com", "hello world mf!");
console.log(receivedData);
//to see require cash
// console.log(require.cache);
