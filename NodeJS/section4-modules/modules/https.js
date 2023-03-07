const response = require("./response");
const request = require("./request");

function fetchData(url, data) {
  request.send(url, data);
  return response.read();
}

const receivedData = fetchData("https://www.google.com", "hello world mf!");
console.log(receivedData);
