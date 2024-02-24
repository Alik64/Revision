const N = parseInt(readline());

for (let i = 0; i < N; i++) {
  let line = '';
  for (let j = 0; j < N; j++) {
    if (i === 0 || i === N - 1 || j === 0 || j === N - 1) {
      line += '#';
    } else {
      line += ' ';
    }
  }
  console.log(line);
}