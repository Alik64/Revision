// check if two words is an anagram

function checkAnagram(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
}

console.log(checkAnagram('alaal', 'alala'))