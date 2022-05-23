const people = [
  { name: "Franc", age: 25, budget: 25000 },
  { name: "Gilles", age: 34, budget: 4000 },
  { name: "Paul", age: 19, budget: 2000 },
  { name: "Marie", age: 43, budget: 5000 },
  { name: "Ginette", age: 18, budget: 800 },
];

// ------------------------- FOR ------------------------- // ES5

for (let i = 0; i < people.length; i++) {
  console.log("FOR :", people[i].name);
}

// ------------------------- FOR OF ---------------------- // ES6

for (let user of people) {
  console.log("FOR OF :", user.age);
}

// ------------------------- FOR EACH ---------------------- //

people.forEach((user, index, array) => {
  console.log("FOR EACH :", user.budget, "€");
});

// ------------------------- MAP ---------------------- // return new array

const newPeople = people.map((user) => `${user.name}(${user.age})`);
console.log("MAP :", newPeople);

// ------------------------- FILTER ---------------------- // return new array

const filteredPeople = people.filter((user) => user.age > 20);
console.log("FILTER :", filteredPeople);

// ------------------------- REDUCE ---------------------- //

const allBudget = people.reduce((total, current) => {
  return total + current.budget;
}, 0);

console.log("REDUCE :", allBudget);

// ------------------------- FIND ---------------------- //

const lostUser = people.find((user) => user.name === "Paul");
console.log("FIND :", lostUser);

// ------------------------- FIND INDEX ---------------------- //

const findIndex = people.findIndex((user) => user.name === "Paul");
console.log("FIND INDEX:", findIndex);

// ------------------------- EXERCICE ---------------------- //

const amount = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: `${person.name}(${person.age})`,
      budget: person.budget,
    };
  })
  .reduce((total, person) => total + person.budget, 0);
console.log("EXERCICE :", amount);
