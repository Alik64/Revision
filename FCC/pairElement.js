/* DNA Pairing
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */

// Solution 1

function pairElement(str) {
  let dna = { A: "T", T: "A", C: "G", G: "C" };
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push([str[i], dna[str[i]]]);
  }
  return result;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATGCTATCGCG"));
