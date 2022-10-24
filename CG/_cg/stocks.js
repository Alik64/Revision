function stocksRank(stocks, prices) {
  let sortPrices = [];
  let averageArr = [];
  const stocksObj = {};

  for (let i = 0; i < stocks.length; i++) {
    prices.forEach((arr) => {
      sortPrices.push(arr[i]);
    });
  }

  for (var i = 0; i < sortPrices.length; i += 3) {
    var three = [
      Math.round(
        (sortPrices[i] + sortPrices[i + 1] + sortPrices[i + 2] / 3) * 100
      ) / 100,
    ];
    averageArr.push(three);
  }
  console.log(averageArr);
  stocks.forEach((element, index) => {
    stocksObj[element] = averageArr[index];
  });

  let topStocks = Object.keys(stocksObj).sort(function (a, b) {
    return stocksObj[b] - stocksObj[a];
  });

  return topStocks.slice(0, 3);
}

let stocks = ["AMZN", "CACC", "EQIX", "GOOG", "ORLY", "ULTA"];
let prices = [
  [12.81, 11.09, 12.11, 10.93, 9.83, 8.14],
  [10.34, 10.56, 10.14, 12.17, 13.1, 11.22],
  [11.53, 10.67, 10.42, 11.88, 11.77, 10.21],
];

console.log(stocksRank(stocks, prices));
