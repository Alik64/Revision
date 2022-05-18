const axios = require("axios");

const getNames = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userNames = response.data.map((user) => user.name);
    console.log(userNames);
    return userNames;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getNames;
