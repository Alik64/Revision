
const N = parseInt(readline());
let result = "";

for (let i = 0; i < N; i++) {
  const input = readline();
  const numbers = input.split(" ").map(Number);
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  if (sum % 2 === 0) {
    result += input + " ";
  }
}

if (result === "") 
  console.log("0");
} else {
  console.log(result.trim());
}
