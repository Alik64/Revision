function identity<T>(value: T): T {
  return value;
}

identity(1);
identity("str");

interface MyArray<T> {
  [n: number]: T;
  map<U>(fn: (el: T) => U): U[];
}
const tsArr: Array<number> = [1, 2, 3, 4];
const tsArr1: MyArray<number> = [1, 2, 3, 4];

tsArr1.map((i) => `${i + 1}`);
