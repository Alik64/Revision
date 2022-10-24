function stocksRank(stocks: string[], prices: number[][]): string[] {
  let filteredPrices = prices.reduce((current, acc) => {}, []);
}

let stocks = ["AAA", "BBB", "CCC", "DDD", "EEE"];
let prices = [
  [12.81, 11.09, 12.11, 10.93, 9.83, 8.14],
  [10, 34, 10.56, 10.14, 12.17, 13.1, 11.22],
  [11.53, 10.67, 10.42, 11.88, 11.77, 10.21],
];

stocksRank(stocks, prices);
