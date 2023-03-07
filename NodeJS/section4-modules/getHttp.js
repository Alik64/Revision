const { get } = require("https");

get("https://www.google.fr", (res) => {
  res.on("data", (chunk) => {
    console.log("data", chunk);
  });
  res.on("end", () => {
    console.log("Completed");
  });
});
