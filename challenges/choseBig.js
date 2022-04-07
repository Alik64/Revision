function choseBig(myArray) {
    let arr = []
    let somme = 0
    let start = 0;

    for (let i = 0; i < myArray.length; i++) {
        start = myArray[i]
        somme = start

        for (let j = i + 1; j < myArray.length; j++) {
            somme += myArray[j]
            arr.push({ somme: somme, i: i, j: j })
        }
    }

    let result = []
    for (const somme in arr) {
        result.push(arr[somme].somme)
    }
    let sommeSolution = Math.max(...result)

    let best = []
    for (const somme in arr) {
        if (arr[somme].somme === sommeSolution) {
            best = [arr[somme].i, arr[somme].j]
        }
    }
    return best

}

console.log(choseBig([99, 99, -99, 8, 0, 8, -5, 6, -24])) // [1,5] 

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

