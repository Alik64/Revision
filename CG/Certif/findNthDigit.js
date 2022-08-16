// https://www.tutorialspoint.com/finding-the-nth-digit-of-natural-numbers-javascript

const n = parseInt(readline());

const findNthDigit = (num = 1) => {
  if (num < 0 || n >= 5000) {
    return;
  }
  let start = 1;
  let len = 1;
  let count = 9;
  while (num > len * count) {
    num -= len * count;
    len++;
    count *= 10;
    start *= 10;
  }
  start += Math.floor((num - 1) / len);
  let s = String(start);
  return Number(s[(num - 1) % len]);
};

console.log(findNthDigit(n));
