function nextWeek(date) {
  let milisecondes = date.setDate(date.getDate() + 7);
  const newWeek = new Date(milisecondes);
  return newWeek;
}
let v = new Date();
console.log("v:", v);
console.log("a:", nextWeek(v));
// v: 2022-07-29T09:05:49.445Z
// a: 2022-08-05T09:05:49.445Z
