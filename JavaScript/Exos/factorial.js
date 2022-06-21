function factorial(n) {
  // if (n < 0) return "Argument must be a positive number";
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log("factorial(5) ==>", factorial(0));
console.log("factorial(5) ==>", factorial(-1));
console.log("factorial(5) ==>", factorial(5));
