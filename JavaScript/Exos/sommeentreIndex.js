/*

array est un tableau d'entiers.
0 <= n1 <= n2 < array.length

La fonction doir retourner la somme des entiers de array dont l'index appartient à l'intervalle (n1 - n2). 
const array = (0,1,2,3,4,5,3):

calc(array,0,5):// 15
calc(array, 8, 6): // 18
*/

function calc(arr, n1, n2) {
  if ((n1 || n2) >= arr.length) {
    return;
  }
  let result = 0;

  for (let i = n1; i <= n2; i++) {
    result += arr[i];
  }

  return result;
}

const array = [0, 1, 2, 3, 4, 5, 8];

console.log("calc(array,2,5) ==>", calc(array, 2, 5)); //14
console.log("calc(array,0,6) ==>", calc(array, 0, 6)); //23
console.log("calc(array,0,6) ==>", calc(array, 0, 7)); //undefined
