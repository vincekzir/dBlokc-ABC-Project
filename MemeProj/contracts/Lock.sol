// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NEOCoin is ERC20, Ownable {
    mapping(address => uint256) private _stakes;
    mapping(address => uint256) private _lastStakeTimestamp;
    uint256 private _rewardRate = 100;

    constructor(
        address initialOwner
    ) ERC20("NEOCoin", "NEO") Ownable(initialOwner) {}

    function mint(address account, uint256 amount) public onlyOwner {
        uint256 newAmount = amount * 1e18;
        _mint(account, newAmount);
    }

    function stake(uint256 amount) public {
        require(amount > 0, "Cannot stake 0 tokens");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");

        _stakes[msg.sender] += amount;
        _lastStakeTimestamp[msg.sender] = block.timestamp;
        _transfer(msg.sender, address(this), amount);
    }

    function getStake(address account) public view returns (uint256) {
        return _stakes[account];
    }

    function getLastStakeTimestamp(
        address account
    ) public view returns (uint256) {
        return _lastStakeTimestamp[account];
    }

    function withdraw() public {
        require(_stakes[msg.sender] > 0, "No staked tokens");

        uint256 stakedAmount = _stakes[msg.sender];
        uint256 reward = (block.timestamp - _lastStakeTimestamp[msg.sender]) *
            _rewardRate;

        _stakes[msg.sender] = 0;
        _transfer(address(this), msg.sender, stakedAmount);
        _mint(msg.sender, reward);
    }
}
