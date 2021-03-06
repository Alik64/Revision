// function parent(number) {
//   return function child() {
//     console.log(number);
//   };
// }
// const cmon = parent(42);
// cmon();
// --------------------------- EX 1 ----------------------- //

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator("com");
console.log(comUrl("google")); //https://google.com

const frUrl = urlGenerator("fr");
console.log(frUrl("yahoo")); //https://yahoo.com

// --------------------------- EX 1 ----------------------- //

// function foo() {
//   var a = 2;

//   function bar() {
//     console.log(a);
//   }

//   return bar;
// }

// var baz = foo();

// baz(); // 2 -- Ого, замыкание только что было раскрыто, мужики!

// --------------------------- EX 2 ----------------------- //

// function wait(message) {
//   setTimeout(function timer() {
//     console.log(message);
//   }, 1000);
// }

// wait("Привет, замыкание!");

// --------------------------- EX 2 ----------------------- //

// for (var i = 1; i <= 5; i++) {
//   (function () {
//     var j = i;
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 1000);
//   })();
// }
