export {};
let tsString: string = "string";
// tsString=1 -> error

//---------------------------/ 1 /----------------------------------//
/*
// JavaScript
const jsSum = (arr)=>{
    if(arr instanceof Array){
        return arr.reduce((a,b)=> a+b)
    }
    throw Error('Message')
}

// TS

let tsSum = (arr:number[])=> arr.reduce((a,b)=>a+b)
*/

//---------------------------/ 2 /----------------------------------//
/*
// JS

//'2' + 2 => '22'
//'s'- 2 => NaN

*/
const srtorNumber: string | number = 1; // union type

type StringOrNumber = string | number;

const ex: StringOrNumber = "string";
const ex2: StringOrNumber = 22;

type AllUnionTupeAlias =
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
