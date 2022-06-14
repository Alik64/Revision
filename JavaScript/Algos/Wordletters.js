function filterWords(words, letters) {
    // Write your code here
    // To debug: console.error('Debug messages...');

    let arr = letters.split('');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (words[i].includes(arr[j])) {
                result.push(words[i])
            }
        }
    }
    console.log(result)
}

filterWords(['the', 'dog', 'got', 'a', 'bone'], "ae")