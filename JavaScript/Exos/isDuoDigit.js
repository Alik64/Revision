function isDuoDigit(num) {
  const numArr = Array.from(num.toString());

  const uniqueNums = numArr.filter(
    (num, index) => numArr.indexOf(num) === index
  );

  return uniqueNums.length > 2
    ? "Number is not DuoDigit"
    : "Number is DuoDigit!";
}

console.log(isDuoDigit(11111000000)); // Number is DuoDigit!
console.log(isDuoDigit(111155555500000)); // Number is NOT DuoDigit!

/*
Convert a number to an array of strings ( 102 = ["1", "0", "2"] )

const numArr = Array.from(num.toString());

Get an array with unique values (without duplicates)

const uniqueNums = numArr.filter((num, index) => numArr.indexOf(num) === index);

We check if length of uniqueNums array is more then 2. If it's true, it means number is NOT DuoDigit and if length of array 2 or less, number is DuoDigit

return uniqueNums.length > 2 ? "Number is not DuoDigit" : "Number is DuoDigit!"
*/
