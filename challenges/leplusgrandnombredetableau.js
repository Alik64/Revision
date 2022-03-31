let arr = [1, 2, 34, 4]

let largest = arr.reduce((a, b) => {
    return (a > b) ? a : b
})

console.log(largest)