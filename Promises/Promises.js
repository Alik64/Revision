// CALLBACK HELL
// var data;
// xhr("https://google.com", (res) => {
//   console.log(res);
//   xhr("...", (res) => {
//     xhr("...", (res) => {
//       xhr("...", (res) => {});
//     });
//   });
// });

// 2 AJAX

// ajax("...")
//   .then(() => {
//     //something
//     return;
//   })
//   .then();

// q
console.log("Mi sidim na divane");
const q = new Promise((resolve, reject) => {
  console.log("Vasya sxodi v magazin!");
  let isMilk = Math.floor(Math.random() * 10);
  console.log("isMilk =", isMilk);
  setTimeout(() => {
    if (isMilk % 2 === 0) {
      resolve("Moloko kupil!");
    } else {
      reject("Moloka ne bilo");
    }
  }, 2000);
});
console.log("Zakonchili... ");
