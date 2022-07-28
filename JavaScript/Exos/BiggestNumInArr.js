let arr = [1, 2, 34, 4]

let largest = arr.reduce((a, b) => {
    return (a > b) ? a : b
})

console.log(largest)

var myArray = [1, 5, 6, 2, 3];
var m = Math.max(...myArray);
console.log(m)
