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
//-------------------------------/ 1 /--------------------------------//

// const fn = (cb) => {
//   return cb();
// };

// const a = fn(() => {
//   console.log("a");
// });
//-------------------------------/ 2 /--------------------------------//

// console.log("Mi sidim na divane");
// const q = new Promise((resolve, reject) => {
//   console.log("Vasya sxodi v magazin!");
//   let isMilk = Math.floor(Math.random() * 10);
//   setTimeout(() => {
//     if (isMilk % 2) {
//       resolve("Ya smog kupit 1l moloka!");
//     } else {
//       reject("Ya ne smog kupit moloka");
//     }
//   }, 2000);
// });
// q.then((answer) => {
//   console.log("Nu kak, ti kupil moloko?");
//   console.log(answer);
// }).catch((err) => {
//   console.log("Nu kak, ti kupil moloko?");
//   console.log(err);
// });

//-------------------------------/ 3 /--------------------------------//

// console.log("start");
// setTimeout(() => console.log("setTimeout 1"), 0);
// Promise.resolve().then(() => console.log("Promise 1"));
// Promise.resolve().then(() => setTimeout(() => console.log("setTimeout 2"), 0));
// Promise.resolve().then(() => console.log("Promise 2"));
// setTimeout(() => console.log("setTimeout 3"), 0);
// console.log("finish");

/*
start
finish
Promise 1
Promise 2
setTimeout 1
setTimeout 3
setTimeout 2
*/

//-------------------------------/ 4 /--------------------------------//
console.log("START");

setTimeout(() => console.log("setTimeout 1"), 0);

const q = new Promise((resolve) => {
  console.log("Promise 1");
  setTimeout(() => console.log("setTimeout 2"));
  resolve();
});

for (let i = 0; i < 3; i++) {
  q.then(() => setTimeout(() => console.log("setTimeout 3")));
}
q.then(() => console.log("Promise 2"));

for (let i = 0; i < 5; i++) {
  q.then(() => console.log("Promise 3"));
}

console.log("finish");

/*
START
Promise 1
finish
Promise 2
Promise 3
Promise 3
Promise 3
Promise 3
Promise 3
setTimeout 1
setTimeout 2
setTimeout 3
setTimeout 3
setTimeout 3
*/
