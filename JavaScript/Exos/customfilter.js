Array.prototype.myFilter = function (callback) {
  const filteredArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  // Only change code above this line
  return filteredArray;
};
