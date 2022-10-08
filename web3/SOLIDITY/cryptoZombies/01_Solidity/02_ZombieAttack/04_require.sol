pragma solidity ^0.4.19;

function sayHiToVitalik(string _name) public returns (string) {
    // Regarde si _name est égal à "Vitalik". Renvoie une erreur et quitte si ce n'est pas le cas.
    // (Remarque : Solidity n'a pas de comparateur de `string` nativement,
    // nous comparons donc leurs hachages keccak256 pour voir si les `string` sont égaux)
    require(keccak256(_name) == keccak256("Vitalik"));
    // Si c'est vrai, on continue avec la fonction :
    return "Hi!";
}
