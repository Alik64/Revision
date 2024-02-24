function checkBool(x, y) {
    return x === 1 || y === 1 || x + y === 1;
}

console.log(checkBool(1)); // true
console.log(checkBool(1, 2)); // true
console.log(checkBool(1, 1)); // true
console.log(checkBool(0.5, 0.5)); // true

