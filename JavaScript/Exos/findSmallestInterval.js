/* implémenter une fonction qui trouve le plus petit intervalle positif entre les deux éléments du tableau.
ex: [1,6,4,2] => 1 car 2-1 = 1

!!! 
Tableau dois comporter au moins 2 éléments, et 100 000 max
La solution doit être optimiser pour les tableaux de grands tailles. */

let arr = [6, 11, 4, 2, 22, 98];

function findSmallestInterval(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let result = sortedArr[1] - sortedArr[0];
  return result;
}
console.log("findSmallestInterval(arr) ==>", findSmallestInterval(arr));
