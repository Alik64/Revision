const axios = require("axios");

axios
  .get("https://www.albert-barsamov.fr")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
