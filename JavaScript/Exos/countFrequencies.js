function countFrequencies(arr) {
  let sortedArr = arr.sort((a, b) => (a > b ? 1 : -1));
  console.log("sortedArr : ", sortedArr);
  const count = {};

  for (const element of sortedArr) {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  }
  return Object.values(count);
}

let arr = ["the", "dog", "got", "the", "bone"];
console.log("countFrequencies(arr) : ", countFrequencies(arr)); // [ 1, 1, 1, 2 ]
