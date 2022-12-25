const people = [
  { id: 1, name: "Kyle", age: 26 },
  { id: 2, name: "John", age: 31 },
  { id: 3, name: "Sally", age: 42 },
  { id: 4, name: "Jill", age: 42 },
];

const result = people.reduce((acc, obj) => {
  return { ...acc, [obj.id]: { data: obj } };
}, {});

console.log(result);
