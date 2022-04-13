function checkBool(x, y) {
    return x === 1 || y === 1 || x + y === 1 ? true : false
}


console.log(checkBool(1))
console.log(checkBool(1, 2))
console.log(checkBool(1, 1))
console.log(checkBool(0.5, 0.5))

