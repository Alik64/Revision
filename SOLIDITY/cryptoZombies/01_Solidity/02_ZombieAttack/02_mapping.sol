pragma solidity ^0.4.19;

// Pour une application financière , stockage d'un `uint` qui correspond à la balance d'un compte utilisateur :
mapping (address => uint) public accountBalance;
// Ou peut être utilisé pour stocker puis rechercher le nom d'utilisateur en fonction d'un userId.
mapping (uint => string) userIdToName;

mapping(A => B) C // On stock B(valeur) sous A(key) dans le C (variable) => C[A] = B