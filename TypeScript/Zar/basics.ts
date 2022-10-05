let string: string = "str";

const jsSum = (arr) => {
  if (arr instanceof Array) {
    return arr.reduce((a, b) => a + b);
  }
  throw Error("Message");
};

let tsSum = (arr: number[]) => arr.reduce((a, b) => a + b);
// tsSum(["hgh", "fhfh"]); - Type 'string' is not assignable to type 'number'.

// 2 + '2'=> '22';
// 's' - 2 => NaN;

const tString = "s";
const tsNum = 5;

const res = tsNum + tString; // const res: string
// const res2 = tString - tsNum; // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type
const res3 = +tString - tsNum; // const res3: number

type StrOrNumber = string | number;

const strOrNumber: string | number = "str";
const strOrNumber2: string | number = "str";
const strOrNumber3: StrOrNumber = 2;
const strOrNumber4: StrOrNumber = "2";

type allAlias =
  | string
  | number
  | null
  | undefined
  | boolean
  | symbol
  | void
  | bigint
  | object
  | [];
