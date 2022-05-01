export {};
const tsArr: number[] = [1, 2, 3];

type TsArr = number | string;

const tsArr1: (number | string)[] = [1, 2, 3, "5"];

const tsArr2: TsArr[] = [1, 2, "3"];
// ===
const tsArr3: Array<TsArr> = [1, 2, "3"];

// Taple

const tsNextArr: [string, number] = ["1", 2];

const [a, b] = tsNextArr;
//const [state, settate] = useState()
