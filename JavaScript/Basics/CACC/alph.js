let alphabet = "abcdefghijklmnopqrstuvwxyz";

function sayAlphabet(str) {
  let newAlphabet = "";
  for (i = 0; i < str.trim().length; i++) {
    newAlphabet += str[i];
  }
  return newAlphabet;
}

console.log(sayAlphabet(alphabet));
