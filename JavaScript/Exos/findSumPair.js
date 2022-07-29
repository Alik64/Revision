function findSumPair(numbers) {
  let newTab = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == k) {
        newTab.push(i, j);
      }
    }
  }
  if (typeof newTab[0] === "undefined" || typeof newTab[1] === "undefined") {
    newTab = [0, 0];
  }
  return newTab;
}
