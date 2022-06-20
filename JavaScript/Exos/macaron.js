const macarons1 = ["Vanilla"];
const macarons2 = ["Vanilla", "Vanilla"];
const macarons3 = [
  "Vanilla",
  "Peach",
  "Chocolate",
  "Strawberry",
  "Pistache",
  "Caramel",
];
const macarons4 = [
  "Vanilla",
  "Chocolate",
  "Peach",
  "Strawberry",
  "Vanilla",
  "Caramel",
];
const macarons5 = ["Vanilla", "Apple", "Vanilla", "Apple"];
const macarons6 = ["Peach", "Apple", "Peach", "Chocolate"];

const price = 4;

function orderPrice(price, macarons) {
  let order = [];
  let num = 0;

  while (macarons.length !== 0) {
    order[num] = [];

    for (let i = 0; i < macarons.length; i++) {
      if (order[num].length < 5 && order[num].includes(macarons[i]) === false) {
        order[num].push(macarons[i]);
        macarons.splice(i, 1);
        i--;
        //i = 0; //ne fonctione pas ?
      }
    }
    num++;
  }

  let result = 0;

  console.log(order);

  order.forEach((set) => {
    let value = compute(price, set.length);
    result += value;
  });

  result = Math.floor(result);

  return result;
}

function compute(price, num) {
  let result;
  switch (num) {
    case 1:
      result = price * num;
      break;
    case 2:
      result = price * num * 0.9;
      break;
    case 3:
      result = price * num * 0.8;
      break;
    case 4:
      result = price * num * 0.7;
      break;
    case 5:
      result = price * num * 0.6;
      break;
    default:
      console.log("An order is incorect");
  }
  return result;
}

console.log(orderPrice(price, macarons1));
console.log(orderPrice(price, macarons2));
console.log(orderPrice(price, macarons3));
console.log(orderPrice(price, macarons4));
console.log(orderPrice(price, macarons5));
console.log(orderPrice(price, macarons6));
