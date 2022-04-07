function decrypt(arr) {
    let result = arr.toString("")
    console.log('result', result)
}
let teb = [18, 21, 14, 14, 11]




//const N = parseInt(readline());

// let result =[]

// for (let i = 0; i < N; i++) {
//     const E = parseInt(readline());

// result.push(E)
// }

const N = 5
let nums = [18, 21, 14, 14, 25] // => hello 

function numToSSColumn(num) {
    let s = '', t;

    while (num > 0) {
        t = (num - 1) % 26;
        s = String.fromCharCode(65 + t) + s;
        num = (num - t) / 26 | 0;
    }
    return s || undefined;
}



let solution = []
nums.forEach(char => solution.push(numToSSColumn(26 - char).toLowerCase()))

console.log(solution.join(''))
