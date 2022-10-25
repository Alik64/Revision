function computeGameStateTs(nameP1: string, nameP2: string, wins: string[]) {
  type PlayersType = {
    [index: string]: number | string;
  };

  const players: PlayersType = { P1: 0, P2: 0 };
  const point: (string | number)[] = [];
  let score: string[] | string = [];

  //Déterminer le nombre de fois que marque chaque joueur

  for (let player of wins) {
    if (players[player]) {
      players[player] = Number(players[player]) + 1;
    } else {
      players[player] = 1;
    }
  }

  //Créer un tableau avec les points de chaque joueur
  for (let [key, value] of Object.entries(players)) {
    point.push(value);
  }

  //Transformer les points en score ou resultat
  if (point[0] > 3 && point[1] < 3) {
    point[0] = "WINS";
  } else if (point[1] > 3 && point[0] < 3) {
    point[1] = "WINS";
  } else if (point[0] > 3 && point[1] > 3) {
    const diff = Number(point[0]) - Number(point[1]);

    if (diff === 1) {
      //advantage pour joueur 1
      point[0] = "ADVANTAGE";
    }
    if (diff === 2) {
      //wins pour joueur 1
      point[0] = "WINS";
    }
    if (diff === -1) {
      //advantage pour joueur 2
      point[1] = "ADVANTAGE";
    }
    if (diff === -2) {
      //wins pour jour 2
      point[1] = "WINS";
    }
  }

  for (let [key, value] of Object.entries(players)) {
    value = point[0];
    point.shift();
    if (value < 3) {
      value = Number(value) * 15;
      score.push(`${key} ${value}`);
    } else if (value === "ADVANTAGE") {
      score = `${key} ADVANTAGE`;
      return score;
    } else if (value === "WINS") {
      score = `${key} WINS`;
      return score;
    } else {
      value = 40;
      score.push(`${key} ${value}`);
    }
  }
  //Affichage en cas d'égalité
  if (score[0].includes("15") && score[1].includes("15")) {
    return "15a";
  }
  if (score[0].includes("30") && score[1].includes("30")) {
    return "30a";
  }
  if (score[0].includes("40") && score[1].includes("40")) {
    return "DEUCE";
  }

  return score[0] + " - " + score[1];
}

console.log(computeGameStateTs("P1", "P2", ["P1"])); // 15 - 0
console.log(computeGameStateTs("P1", "P2", ["P2", "P2"])); // 0 - 30
console.log(computeGameStateTs("P1", "P2", ["P1", "P1", "P1"])); // 40 - 0
console.log(computeGameStateTs("P1", "P2", ["P1", "P1", "P1", "P1"])); // Simple victory
console.log(computeGameStateTs("P1", "P2", ["P1", "P2"])); // 15a
console.log(computeGameStateTs("P1", "P2", ["P1", "P2", "P1", "P1"])); // 40 - 15
console.log(computeGameStateTs("P1", "P2", ["P1", "P2", "P1", "P2"])); // 30a
console.log(
  computeGameStateTs("P1", "P2", [
    "P1",
    "P2",
    "P1",
    "P1",
    "P2",
    "P2",
    "P1",
    "P2",
  ])
); // DEUCE
console.log(
  computeGameStateTs("P1", "P2", [
    "P1",
    "P2",
    "P1",
    "P1",
    "P2",
    "P2",
    "P1",
    "P2",
    "P1",
  ])
); // ADVANTAGE
console.log(
  computeGameStateTs("P1", "P2", [
    "P1",
    "P2",
    "P1",
    "P1",
    "P2",
    "P2",
    "P1",
    "P2",
    "P1",
    "P1",
  ])
); // P1 WINS
console.log(
  computeGameStateTs("P1", "P2", [
    "P1",
    "P2",
    "P1",
    "P1",
    "P2",
    "P2",
    "P1",
    "P2",
    "P1",
    "P1",
    "P2",
    "P1",
    "P2",
    "P1",
    "P2",
    "P2",
    "P2",
    "P2",
  ])
); // P2 WINS
