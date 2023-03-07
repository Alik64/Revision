const { request } = require("http");

const req = request("http://google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`The data is ${chunk}`);
  });
  res.on("end", () => {
    console.log("no more data!");
  });
});

req.end();
