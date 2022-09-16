function isOnEvenPosition(table, value) {
  let result = table.indexOf(value);
  if (result % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
