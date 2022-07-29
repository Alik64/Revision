function filterWords(words, letters) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  let arr = letters.split("");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (words[i].includes(arr[j]) && !result.includes(words[i])) {
        result.push(words[i]);
      }
    }
  }

  for (let x = 0; x < result.length; x++) {
    if (result[x] === result[x + 1]) {
      result.splice(x, 1);
      x--;
    }
  }
  return result;
}

console.log(filterWords(["the", "dog", "got", "a", "bone"], "ae"));
console.log(filterWords(["he", "saw", "and", "she", "saw"], "hs"));
