type TsArr = number | string;

const tsArr: number[] = [11, 2, 4];
const tsArr2: TsArr[] = [11, "hello", 4];
const tsArr3: Array<TsArr> = [11, "hello", 4];

const tsNextArr: [string, number] = ["hello", 2];

const [a, b] = tsNextArr; //a => string, b => number
// const [state, setState] = useState(true)
