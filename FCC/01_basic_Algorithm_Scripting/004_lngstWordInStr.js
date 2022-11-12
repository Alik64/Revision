function findLongestWordLength(str) {
  let arrString = str.split(" ");
  let max = 0;
  arrString.forEach((word) => {
    if (word.length > max) {
      max = word.length;
    }
  });
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
