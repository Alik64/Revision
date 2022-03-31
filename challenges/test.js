function filterWords(words, letters) {
    // Write your code here
    // To debug: console.error('Debug messages...');

    let arr = letters.split('');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[j].includes(arr[i])) {
                result.push(words[j])
            }
        }
    }
    console.log(result)
}

filterWords(['the', 'dog', 'got', 'a', 'bone'], "ae")


function choseBig(myArray) {
    console.log((myArray.sort((a, b) => b - a).slice(0, 2)));
}



choseBig([-1, 9, 0, 8, -5, 6, -24])