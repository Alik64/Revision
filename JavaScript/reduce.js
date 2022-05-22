// --------------------------- BASIC ----------------------- //

const items = [
  { name: "Rice", price: 5 },
  { name: "Book", price: 20 },
  { name: "Chicken", price: 10 },
  { name: "Monitor", price: 100 },
];

// let totalPrice = 0;
// items.forEach((item) => {
//   totalPrice += item.price;
// });

const totalPrice = items.reduce((total, item) => {
  return total + item.price;
}, 0);
console.log("Total: ", totalPrice); // 135

// --------------------------- EX 2 ----------------------- //
const people = [
  { name: "Kyle", age: 26 },
  { name: "John", age: 31 },
  { name: "Sally", age: 42 },
  { name: "Jill", age: 42 },
];

const result = people.reduce((groupedPeople, person) => {
  const age = person.age;
  if (groupedPeople[age] == null) groupedPeople[age] = [];
  groupedPeople[age].push(person);
  return groupedPeople;
}, {});
console.log(result);
// {
//     '26': [ { name: 'Kyle', age: 26 } ],
//     '31': [ { name: 'John', age: 31 } ],
//     '42': [ { name: 'Sally', age: 42 }, { name: 'Jill', age: 42 } ]
// }

// --------------------------- EX 3 ----------------------- //

const developers = [
  { name: "Kyle", grade: "junior" },
  { name: "John", grade: "middle" },
  { name: "Sally", grade: "middle" },
  { name: "Jill", grade: "senior" },
];

const grades = developers.reduce((groupDevs, dev) => {
  const grade = dev.grade;
  if (groupDevs[grade] == null) groupDevs[grade] = [];
  groupDevs[grade].push(dev.name);
  return groupDevs;
}, {});

console.log(grades); // { junior: [ 'Kyle' ], middle: [ 'John', 'Sally' ], senior: [ 'Jill' ] }

// --------------------------- EX 4 ----------------------- //

const numbers = [13, 2, 5];

const sum = numbers.reduce((sum, num, index, array) => {
  return sum + num;
}, 0);

console.log(sum);
