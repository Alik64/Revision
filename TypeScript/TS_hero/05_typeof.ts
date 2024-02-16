//examples of typeof

{
  const name = "Euler's Number";
  const value = 2.7182;

  // we can use `typeof` for type aliases
  type Value = typeof value;

  interface FamousNumbers {
    // or we can use it inline
    label: typeof name;
    value: Value;
  }
}

type Width = typeof width;
type Margin = unknown;
type Data = unknown;
type YScale = unknown;

type D3ChartConfig = unknown;


const height = 500;
const width = 700;



const margin = {
  top: 20,
  right: 30,
  bottom: 40,
  left: 50,
};


const d3ChartConfig = {
  width,
  height,
  margin,
  data: [
    { category: 'A', value: 30 },
    { category: 'B', value: 45 },
    { category: 'C', value: 60 },
    { category: 'D', value: 25 },
    { category: 'E', value: 50 },
  ],
  xScale: {
    type: 'band',
    domain: [0, 100],
    range: [0, width - margin.right - margin.left],
  },
  yScale: {
    type: 'linear',
    domain: [0, 100],
    range: [height - margin.bottom, margin.top],
  },
  xAxis: {
    label: 'Categories',
    tickSize: 5,
  },
  yAxis: {
    label: 'Values',
    tickSize: 5,
  },
  bar: {
    fill: 'rebeccapurple',
  },
};





