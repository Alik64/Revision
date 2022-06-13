function choseBig(myArray) {
  let arr = [];
  let somme = 0;
  let start = 0;

  for (let i = 0; i < myArray.length; i++) {
    start = myArray[i];
    somme = start;

    for (let j = i + 1; j < myArray.length; j++) {
      somme += myArray[j];
      arr.push({ somme: somme, i: i, j: j });
    }
  }

  let result = [];
  for (const somme in arr) {
    result.push(arr[somme].somme);
  }
  let sommeSolution = Math.max(...result);

  let best = [];
  for (const somme in arr) {
    if (arr[somme].somme === sommeSolution) {
      best = [arr[somme].i, arr[somme].j];
    }
  }
  return best;
}

function Big(array) {
  let solution = {};

  //Boucle qui itère chaque valeur
  for (let x = 0; x < array.length; x++) {
    let somme = array[x];

    //Boucle qui ajoute la valeur + 1
    for (let y = x + 1; y < array.length; y++) {
      somme += array[y];

      //Si la somme est supérieur alors tu récupère les coordonées
      if (somme > solution.somme || solution.somme === undefined) {
        solution = { somme: somme, x: x, y: y };
      }
    }
  }
  return [solution.x, solution.y];
}

console.log(choseBig([1, 99, 4, 8, 0, 8, -5, 6, -24])); // [0,7]

console.log(Big([1, 99, 4, 8, 0, 8, -5, 6, -24])); // [0,7]
