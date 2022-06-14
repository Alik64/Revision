// Encoding aaabbbccccc => 3a3b5c

function encoder(str) {

    let base = str.split('') //['a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'c']
    let filtered = [...new Set(base)] // ['a', 'b', 'c']

    let result = []
    let count = 0

    for (let i = 0; i < filtered.length; i++) {
        count = 0

        for (let j = 0; j < base.length; j++) {
            if (filtered[i] === base[j]) {
                count++
            }

        }
        result.push(count + filtered[i])
    }


    console.log(result.join(''))
}
encoder('aaabbbcccddcc')