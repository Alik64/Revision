/* Reserved variable's names 

break case class catch const continue debugger default delete
do else export extends finally for function if import in instanceof
let new return super switch this throw try typeof
var void while with yield
*/

//____________________________ TYPES ____________________________//
const infinity = 5 / 0; // Infinity
console.log("typeof infinity : ", typeof infinity); // number

const notAnumber = 10 * "ansd"; // NaN
console.log("typeof notAnumber : ", typeof notAnumber); // number

console.log("typeof null : ", typeof null); // object

const fn = () => {};
console.log("typeof fn : ", typeof fn); // function

//____________________________ STRING ____________________________//

const concat = "hello World!";
console.log('typeof ""+5 : ', typeof ("" + 5)); // string
console.log("concat + 5 : ", concat + 5); // hello World!5
console.log("concat + arr : ", concat + [1, 2, 3]); // hello World!1,2,3
console.log("concat + true : ", concat + true); // hello World!true
console.log("concat + undefined : ", concat + undefined); // hello World!undefined
console.log("concat + function(){} : ", concat + function () {}); // hello World!function () {}
console.log("concat + {a:1} : ", concat + { a: 1 }); // hello World![object Object]

//____________________________ NUMBER ____________________________//

console.log('typeof +"5" : ', typeof +"5"); // number
console.log("typeof +true : ", typeof +true); // number
console.log("+true : ", +true); // 1
console.log("+false : ", +false); // 0
console.log("+null : ", +null); // 0

//____________________________ BOOLEAN ____________________________//

console.log('Boolean("") : ', Boolean("")); // false
console.log('Boolean(" ") : ', Boolean(" ")); // true
console.log("Boolean(0) : ", Boolean(0)); // false
console.log("Boolean(1) : ", Boolean(1)); // true
console.log('!!"abc" : ', !!"abc"); // true

//____________________________ MATH OPERATORS ____________________________//

console.log("true + true : ", true + true); // 2
console.log("true + false : ", true + false); // 1
console.log("false + false : ", false + false); // 0
