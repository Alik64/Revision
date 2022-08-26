// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract ZombieFactory {
    uint256 dnaDigits = 16;
    uint256 dnaModulus = 10**dnaDigits;

    struct Zombie {
        string name;
        uint256 dna;
    }

    Zombie[] public zombies;

    function createZombie(string _name, uint256 _dna) {}
}
