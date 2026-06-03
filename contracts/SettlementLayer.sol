// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title SettlementLayer
/// @notice Simple stablecoin settlement and payment layer example for Arc
contract SettlementLayer {
    mapping(address => uint256) public balances;

    event Deposited(address indexed user, uint256 amount);
    event Settled(address indexed from, address indexed to, uint256 amount);

    function deposit() external payable {
        balances[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    function settle(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
        emit Settled(msg.sender, to, amount);
    }

    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }
}