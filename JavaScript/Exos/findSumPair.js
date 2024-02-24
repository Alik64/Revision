function findSumPair(numbers,k) {
  let newTab = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == k) {
        newTab.push(i, j);
      }
    }
  }
  if (typeof newTab[0] === "undefined" || typeof newTab[1] === "undefined") {
    newTab = [0, 0];
  }
  return newTab;
}

function findSumPair(numbers, k) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == k) {
        return [i, j]; // Retourne immédiatement les indices de la première paire trouvée
      }
    }
  }
  return [0, 0]; // Retourne [0, 0] si aucune paire n'est trouvée
}