// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Counter {
    uint public number; 

    constructor(uint _num) {
        number = _num;
        
    }

    function increment() public {
        require(number<10,"it cannot be greater than 5.");
        number += 1;
    }


}