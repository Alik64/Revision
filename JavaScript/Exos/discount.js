function calculateTotalPrice(prices, discount) {
  let sortedArr = prices.sort((a, b) => a - b);
  let largestNumInArr = sortedArr.at(-1); // 400
  let discountAmount = (largestNumInArr / 100) * discount;

  let discountedLargest = largestNumInArr - discountAmount;

  sortedArr.splice(-1, 1, discountedLargest);

  function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
    return Math.floor(sum);
  }
  return sumArray(sortedArr);
}
