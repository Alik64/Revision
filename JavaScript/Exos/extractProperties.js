let obj = {
  john: 12,
  brian: true,
  doe: "hi",
  fred: false,
};

function exctractProperties(obj) {
  let values = Object.keys(obj);
  let result = values.map((word) => {
    return `Hello-${word}`;
  });
  return result;
}
console.log("exctractProperties(obj) : ", exctractProperties(obj));
//['Hello-john', 'Hello-brian', 'Hello-doe', 'Hello-fred'];
