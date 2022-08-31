pragma solidity ^0.4.19;

mapping (address => uint) favoriteNumber;

function setMyNumber(uint _myNumber) public {
  // Mettre à jour notre mappage `favoriteNumber` pour stocker `_myNumber` sous `msg.sender`
  favoriteNumber[msg.sender] = _myNumber;
  // ^ La syntaxe pour stocker des données dans un mappage est la même qu'avec les tableaux
}

function whatIsMyNumber() public view returns (uint) {
  // On récupère la valeur stockée à l'adresse de l'expéditeur
  // Qui sera `0` si l'expéditeur n'a pas encore appelé `setMyNumber`
  return favoriteNumber[msg.sender];
}