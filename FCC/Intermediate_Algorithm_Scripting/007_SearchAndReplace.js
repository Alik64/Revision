// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

// Solution

function myReplace(str, before, after) {

    if (after[0].toUpperCase() === before[0]) {
        after[0].toUpperCase()
        console.log(after)
    }
    let arr = str.split(' '); // [A quick brown fox jumped over the lazy dog]

    let index = arr.indexOf(before); // 4

    arr.splice(index, 1, after)

    return arr.join(' ')


}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"));