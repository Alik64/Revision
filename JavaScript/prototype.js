const person = {
  name: "Bill",
  age: 25,
  greet: function () {
    console.log(`hello from ${this.name}`);
  },
};

const man = new Object({
  name: "John",
  age: 25,
  greet: function () {
    console.log(`hello from ${this.name}`);
  },
});

Object.prototype.sayHello = function () {
  console.log("Hello from say Hello!");
};

const Franc = Object.create(person);
Franc.name = "Franc";
console.log("Hello from say Hello!");
