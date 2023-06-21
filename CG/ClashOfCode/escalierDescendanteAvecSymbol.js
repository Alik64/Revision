const n = parseInt(readline());
const a = parseInt(readline());
const symbol = readline();

for (i = 1; i <= n; i++) {
  console.log(" ".repeat(a + i) + symbol.repeat(i));
}
