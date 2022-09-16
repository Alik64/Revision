function helloProp(obj) {
  let values = Object.keys(obj);
  let result = values.map((word) => {
    return `Hello-${word}`;
  });
  return result;
}
