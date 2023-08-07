const { read } = require("./response");
const { send } = require("./request");

function fetchData(url, data) {
  send(url, data);
  return read();
}

const receivedData = fetchData("https://www.google.com", "hello world mf!");
console.log(receivedData);
