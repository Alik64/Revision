const mapArrToStrings = (arr) => {
  return arr.filter((item) => Number.isInteger(item)).map(String);
};
console.log(mapArrToStrings(["hello", "3", 3, 454]));
module.exports = mapArrToStrings;
