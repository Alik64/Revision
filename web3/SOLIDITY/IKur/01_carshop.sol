// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract CarShop {
    mapping(address => bool) buyers;
    uint256 public price = 2 ether;
    address public owner;
    address public shopAddress;
    bool fullyPaid; // false

    constructor() {
        owner = msg.sender;
        shopAddress = address(this);
    }

    function getBuyer(address _addr) public view returns (bool) {
        require(owner == msg.sender, "You are not an owner!");

        return buyers[_addr];
    }

    function addBuyer(address _addr) public {
        require(owner == msg.sender, "You are not an owner!");
        buyers[_addr] = true;
    }

    function getBalance() public view returns (uint256) {
        return shopAddress.balance;
    }

    receive() external payable {
        //address: 0xf8e81D47203A594245E36C48e151709F0C19fBe8
        require(buyers[msg.sender] && msg.value <= price && !fullyPaid, 'Rejected');

        if(shopAddress.balance == price){
            fullyPaid = true
        }
    }
}
