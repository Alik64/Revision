// Voici comment nous accéderions à notre contrat
var abi = "abi générée par le compilateur ";
var ZombieFactoryContract = web3.eth.contract(abi);
var contractAddress =
  "l'adresse de notre contrat Ethereum après avoir été déployé";
var ZombieFactory = ZombieFactoryContract.at(contractAddress);
// `ZombieFactory` a accès aux fonctions et évènements publiques de notre contrat

// une sorte d'écouteur d'événement pour enregistrer l'entrée de texte :
$("#ourButton").click(function (e) {
  var name = $("#nameInput").val();
  // Appelle la fonction `createRandomZombie` de notre contrat :
  ZombieFactory.createRandomZombie(name);
});

// Écoute l'évènement `NewZombie`, et met à jour l'interface utilisateur
var event = ZombieFactory.NewZombie(function (error, result) {
  if (error) return;
  generateZombie(result.zombieId, result.name, result.dna);
});

// Prend l'ADN Zombie, et met à jour l'image
function generateZombie(id, name, dna) {
  let dnaStr = String(dna);
  // Rempli le devant de l'ADN avec des zéros s'il y a moins de 16 caractères
  while (dnaStr.length < 16) dnaStr = "0" + dnaStr;

  let zombieDetails = {
    // Les 2 premiers chiffres définissent la tête. Il y a 7 possibilités,
    // donc % 7 pour avoir un nombre entre 0 et 6, on ajoute ensuite 1
    // pour avoir entre 1 et 7. Nous avons ensuite 7 fichiers images
    // nommés "head1.png" jusqu`à "head7.png" que nous chargeons en fonction
    // de ce nombre.
    headChoice: (dnaStr.substring(0, 2) % 7) + 1,
    // 2ème 2 chiffres définissent les yeux, 11 variations:
    eyeChoice: (dnaStr.substring(2, 4) % 11) + 1,
    // 6 variations de haut :
    shirtChoice: (dnaStr.substring(4, 6) % 6) + 1,
    // Les 6 derniers chiffres contrôlent la couleur. Mise à jour à l'aide
    // du filtre CSS : hue-rotate qui a 360 degrés :
    skinColorChoice: parseInt((dnaStr.substring(6, 8) / 100) * 360),
    eyeColorChoice: parseInt((dnaStr.substring(8, 10) / 100) * 360),
    clothesColorChoice: parseInt((dnaStr.substring(10, 12) / 100) * 360),
    zombieName: name,
    zombieDescription: "A Level 1 CryptoZombie",
  };
  return zombieDetails;
}
