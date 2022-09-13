const start = [
  { sectionIndex: 1, itemIndex: 1 },
  { sectionIndex: 1, itemIndex: 2 },
  { sectionIndex: 2, itemIndex: 1 },
  { sectionIndex: 2, itemIndex: 2 },
];

var mapped = start.map((item) => ({ [item.sectionIndex]: item }));

console.log(object);
