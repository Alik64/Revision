const delay = (callback, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, ms);
  });
};

delay(() => 5 + 5, 1000).then((res) => console.log(res));
module.exports = delay;
