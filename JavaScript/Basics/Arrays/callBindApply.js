function context() {
  console.log("Context", this);
}

const person = {
  name: "John",
  age: 30,
  sayHello: context,
  //   sayHelloWindow: context.bind(window),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Job: ${job}`);
    console.log(`Phone: ${phone}`);
    console.groupEnd();
  },
};

const peter = { name: "Peter", age: 23 };
// person.logInfo();
// person.logInfo.bind(peter)();
// -------------- 1 methode passer des argument
// const peterInfo = person.logInfo.bind(peter);
// peterInfo("Javascript Dev", "06123456");

// -------------- 2 methode passer des argument

// const peterInfo = person.logInfo.bind(peter, "Javascript Dev", "06123456");
// person.logInfo.bind(peter, "Javascript Dev", "06123456")();
// person.logInfo.call(peter, "Javascript Dev", "06123456");
// person.logInfo.apply(peter, ["Javascript Dev", "06123456"]);

// -------------- Exercice 1

// const array = [1, 2, 3, 4, 5];

// Array.prototype.multBy = function (n) {
//   return this.map((i) => i * n);
// };

// console.log(array.multBy(5));

// -------------- Exercice 2

/*
Créer son propre BIND

ex: 
function logPerson(){
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Franc',age:33, job:'Frontend'}
const person2 = {name: 'Julie',age:23, job:'Backend'}

bind(person1,logPerson)
bind(person2,logPerson)

*/

function bind(context, fn) {
  return function (...arguments) {
    fn.apply(context, [arguments]);
  };
}
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Franc", age: 33, job: "Frontend" };
const person2 = { name: "Julie", age: 23, job: "Backend" };

bind(person1, logPerson)();
bind(person2, logPerson)();
