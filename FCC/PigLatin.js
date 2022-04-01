/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

*/

// Solution

function translatePigLatin(str) {
    const regex = /^[^aeiou]+/
    const filtered = str.match(regex)
    return !filtered
        ? str.concat('way')
        : str.replace(regex, "").concat(filtered).concat('ay')
}

console.log(translatePigLatin("consonant")); // onsonantcay
console.log(translatePigLatin("algorithm")); // algorithmway
