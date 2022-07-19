function ensure(value) {
  if (value === undefined) {
    throw new Error();
  }
  return value;
}

try {
  console.log(ensure());
} catch (err) {
  console.log(err);
}
