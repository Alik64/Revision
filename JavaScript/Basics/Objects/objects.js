// literal object

const person = {
  name: "John",
  id: 12,
  country: "France",
};

// object.assign

const user = Object.assign({
  name: "Peter",
  id: 14,
});

const newUser = Object.assign({}, user, {
  email: "user@mail.com",
});

console.log(newUser);

Object.assign(person, {
  id: 15,
});
console.log(person);

// ...SPREAD operator

const mike = {
  name: "Mickael",
  id: 15,
};

const newMike = {
  ...mike,
  country: "USA",
};
console.log(newMike);

//----------------------------------------- OBJECT{...} => ARRAY[...]

// ------   Object.keys()

console.log("persons keys", Object.keys(person)); //  [ 'name', 'id', 'country' ]

// ------   Object.values()
console.log("persons keys", Object.values(person)); // [ 'John', 15, 'France' ]

// ------   Object.entries()
console.log("persons keys", Object.entries(person)); // [ [ 'name', 'John' ], [ 'id', 15 ], [ 'country', 'France' ] ]

// ------   Object.freeze() - impossible to change object
// Object.freeze(person);

//person.name = "Jacques";
//console.log("person name", person.name); // John

// ------   Object.seal() - it possible to change object,but not add new entries

Object.seal(person);
person.name = "Bill";
person.sex = "M";
console.log("person", person); // John

// ------   Object.is()

const anotherMike = Object.assign(mike);
const isEqual = Object.is(mike, anotherMike);
console.log("isEqual", isEqual);

// ------   For in

for (let key in person) {
  console.log("persons keys for in", key);
}

// ------   Destructuring

const newPerson = Object.entries(person);

for (let [key, value] of newPerson) {
  console.log(`${key} : ${value}`);
}
