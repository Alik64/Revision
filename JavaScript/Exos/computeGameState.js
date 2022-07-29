function computeGameState(nameP1, nameP2, wins) {
  const stats = {
    P1: 0,
    P2: 0,
  };

  for (const score of wins) {
    if (stats[score]) {
      stats[score]++;
    } else {
      stats[score] = 1;
    }
  }
  let result = [];

  for (let [key, value] of Object.entries(stats)) {
    if (value < 3) {
      value *= 15;
    } else if (value === 3) {
      value = 40;
    } else {
      value = "WINS";
    }
    result.push(`${key}: ${value}`);
  }

  return result;
}

console.log(computeGameState("P1", "P2", ["P1", "P2", "P2", "P2", "P2"]));
