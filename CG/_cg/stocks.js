function average(a, n) {
  var sum = 0;
  for (var i = 0; i < n; i++) sum += a[i];

  return parseFloat(sum / n);
}

function stocksRank(stocks, prices) {
  let priceByStock = [];

  const stocksObj = {};

  for (let i = 0; i < stocks.length; i++) {
    prices.forEach((arr) => {
      priceByStock.push(arr[i]);
    });
  }

  let priceByStockMatrix = priceByStock.reduce(function (rows, key, index) {
    return (
      (index % prices.length == 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows
    );
  }, []);

  let averageArr = priceByStockMatrix.map((arr) => average(arr, arr.length));

  stocks.forEach((element, index) => {
    stocksObj[element] = averageArr[index];
  });

  let topStocks = Object.keys(stocksObj).sort(function (a, b) {
    return stocksObj[b] - stocksObj[a];
  });

  return topStocks.slice(0, 3);
}

let stocks = ["AMZN", "CACC", "EQIX", "GOOG", "ORLY", "ULTA", "AAA"];
let prices = [
  [12.81, 11.09, 12.11, 10.93, 9.83, 8.14, 20],
  [10.34, 10.56, 10.14, 12.17, 13.1, 11.22, 20],
  [11.53, 10.67, 10.42, 11.88, 11.77, 10.21, 20],
  [11.53, 10.67, 10.42, 11.88, 11.77, 10.21, 20],
];

console.log(stocksRank(stocks, prices));
