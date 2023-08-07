import { send } from "./request.mjs";
import { read } from "./response.mjs";

function fetchData(url, data) {
  send(url, data);
  return read();
}

const receivedData = fetchData("https://www.google.com", "hello world mf!");
console.log(receivedData);
