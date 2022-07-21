function encoder(str) {
  let result = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result.push(count + str[i]);
      count = 1;
    }
  }

  return result.join("");
}
console.log(encoder("aabbcaa")); // 2a2b1c2a
