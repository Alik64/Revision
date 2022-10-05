// calculate('add',2,3)=> 5

enum MethodEnum {
  add = 0,
  sub = 1,
  div = 2,
}

function calculate(method: MethodEnum, first: number, second: number): number {
  switch (method) {
    case MethodEnum.add:
      return first + second;
    case MethodEnum.sub:
      return first - second;
    case MethodEnum.div:
      return first / second;
  }
}

calculate(MethodEnum.sub, 3, 5);

type TypeFn = () => number;
type TypeDEfaultFn = () => void;

const ArrFn: TypeFn = () => 2;
const ArrFn2: TypeDEfaultFn = () => 2;
