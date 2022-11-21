function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
}

console.log(repeatStringNumTimes("hello", 2));
