const request = require("./request.js");
const response = require("./response.js");
module.exports = {
  send: request.send,
  read: response.read,
};
