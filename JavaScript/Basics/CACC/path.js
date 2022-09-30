// let source = process.argv;

// function split(str) {
//   for (i = 0; str.includes("/"); i++) {
//     const split_string = str.split("/");
//     return split_string;
//   }
// }

// let max = split(source[1]).length - 1;

// console.log(split(source[1])[max]);

let nomDuProgramme = process.argv[1];
let result = nomDuProgramme.split("/").at(-1);

console.log(result);
