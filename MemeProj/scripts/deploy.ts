const { ethers } = require("hardhat");
const { expect } = require('chai');

async function main() {
  const [owner] = await ethers.getSigners();
  // const initialSupply = ethers.parseUnits("1000", 18);

  const myTokenContract = await ethers.deployContract("NEOCoin", [owner.address]);
  await myTokenContract.waitForDeployment();

  // const ethAmount = ethers.parseUnits("1", 18n);
  // await myTokenContract.connect(owner).mint(owner.address, ethAmount);

  // const balance = await myTokenContract.balanceOf(owner.address);
  // console.log("Minting successful. Balance of owner:", balance.toString());

  // const ethAmountStake = ethers.parseUnits("1", 18);
  // await myTokenContract.connect(owner).stake(ethAmountStake);
  
  // const stakedBalance = await myTokenContract.getStake(owner.address);
  // console.log("Staking successful. Staked balance of Address:", stakedBalance.toString());

  // const initialBalance = await myTokenContract.balanceOf(owner.address);
  // console.log("Address initial balance before withdraw:", initialBalance.toString());

  

  // await new Promise(resolve => setTimeout(resolve, 10000));
  // await myTokenContract.connect(owner).withdraw();

  // const stakedBalanceAfterWithdrawal = await myTokenContract.getStake(owner.address);
  // console.log("Withdrawal successful. Staked balance of Address after withdrawal:", stakedBalanceAfterWithdrawal.toString())

  // const finalBalance = await myTokenContract.balanceOf(owner.address);
  // console.log("Address final balance after withdraw:", finalBalance.toString());

  console.log(`Contract deployed to ${myTokenContract.target}`);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});