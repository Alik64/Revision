type StockObjType = {
  [index: string]: number;
};

function stocksRankTs(stocks: string[], prices: number[][]) {
  let averages: number[] = [];
  const stocksObj: StockObjType = {};

  for (let i = 0; i < stocks.length; i++) {
    let sum = 0;
    let average = 0;
    prices.forEach((price) => (sum += price[i]));
    average = sum / prices.length;
    averages.push(average);
  }

  stocks.forEach((element, index) => {
    stocksObj[element] = averages[index];
  });
  console.log(stocksObj);

  let topStocks = Object.keys(stocksObj).sort(function (a, b) {
    return stocksObj[b] - stocksObj[a];
  });
  return topStocks.slice(0, 3);
}

let stocksTs = ["AMZN", "CACC", "EQIX", "GOOG", "ORLY", "ULTA"];
let pricesTs = [
  [12.81, 11.09, 12.11, 10.93, 9.83, 8.14],
  [10.34, 10.56, 10.14, 12.17, 13.1, 11.22],
  [11.53, 10.67, 10.42, 11.88, 11.77, 10.21],
];

console.log(stocksRankTs(stocksTs, pricesTs));
