type TsObj = {
  name: string;
  age: number;
  sex?: string; // optional type
};

interface TsInterface {
  name: string;
  readonly lastname: string;
  age: number;
  sex?: string; // optional type
}

const tsObj: { name: string; age: number } = {
  name: "John",
  age: 13,
};
const tsObj2: TsObj = {
  name: "John",
  age: 13,
};

const tsInterf: TsInterface = {
  name: "John",
  lastname: "CArl",
  age: 13,
};

interface IndexInterface {
  [n: string]: string;
}
const data: IndexInterface = {
  key1: "abc",
  key2: "defg",
};

const val2 = data.key2; // const val2: string
