"use client";
import { BrowserProvider } from "ethers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getContract } from "../../config";
import Background from "../../public/green.jpg";
import Wallet from "../components/Wallet.tsx";
import ShowButtons from "../components/ShowButtons.tsx";
import MintInputs from "../components/inputs/MintInputs";
import StakeInputs from "../components/inputs/StakeInputs";
import LockInputs from "../components/inputs/LockInputs";
import WithdrawInputs from "../components/inputs/WithdrawInputs";

export default function Home() {
  const [walletKey, setwalletKey] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const [inputType, setInputType] = useState("");
  const [mintAddress, setMintAddress] = useState("");
  const [mintAmount, setMintAmount] = useState("");

  const connectWallet = async () => {
    const { ethereum } = window as any;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setwalletKey(accounts[0]);
  };

  const mintCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const tx = await contract.mint(mintAddress, mintAmount);
      console.log(tx);
      await tx.wait();
      console.log("Mint Address:", mintAddress);
      console.log("Mint Amount:", mintAmount);
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Minting failed: ${decodedError?.args}`);
    }
  };

  const handleMintAddressChange = (event) => {
    setMintAddress(event.target.value);
  };

  const handleMintAmountChange = (event) => {
    setMintAmount(event.target.value);
  };

  const handleMintCoinClick = () => {
    setShowComponent(true);
    setInputType("mint");
  };

  const handleStakeCoinClick = () => {
    setShowComponent(true);
    setInputType("stake");
  };

  const handleLockCoinClick = () => {
    setShowComponent(true);
    setInputType("lock");
  };

  const handleWithdrawCoinClick = () => {
    setShowComponent(true);
    setInputType("withdraw");
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-12 relative"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "80%",
        overflow: "hidden", // Hide overflow to prevent scrollbars
      }}
    >
      <div className="absolute top-0 left-0 w-full h-8 bg-white z-10"></div>
      <div className="ml-3 flex justify-center items-center text-center">
        <p className="fixed left-0 top-0 flex w-full justify-center items-center p-8 pb-6 pt-8 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4 lg:dark:bg-transparent">
          <a
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            href="https://sepolia.arbiscan.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/arbitrum-arb-logo.svg"
              alt="Arbitrum Logo"
              className="mr-5"
              width={40}
              height={24}
              priority
            />
          </a>
          <Image
            src="/logo.png"
            alt="NEO Logo"
            className=""
            width={70}
            height={24}
            priority
          />
          <a
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            href="https://metamask.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/metamask.svg"
              alt="Metamask Logo"
              className=""
              width={80}
              height={24}
              priority
            />
          </a>
        </p>
      </div>

      <div
        className="mb-10 justify-center items-center text-center group rounded-lg bg-green-500 bg-opacity-10 border border-transparent px-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col"
        style={{
          position: "absolute",
          top: "24%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Wallet type={1} walletKey={walletKey} onClick={connectWallet} />
      </div>

      <div
        className="grid justify-center items-center text-center mb-60 group rounded-lg bg-green-500 bg-opacity-10 border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 fx flex-col"
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "20px 20px 0 0 ",
        }}
      >
        <div className="grid grid-cols-4 gap-14 justify-center items-center">
          <ShowButtons
            type={1}
            onClick={handleMintCoinClick}
          />
          <ShowButtons
            type={2}
            onClick={handleStakeCoinClick}
          />
          <ShowButtons
            type={3}
            onClick={handleLockCoinClick}
          />
          <ShowButtons
            type={4}
            onClick={handleWithdrawCoinClick}
          />
        </div>
      </div>

      <div
        className="grid justify-center items-center text-center group rounded-lg bg-green-500 bg-opacity-10 border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex-col"
        style={{
          position: "absolute",
          width: "853px",
          height: "400px",
          bottom: "6%",
          top: "65.2%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "0 0 20px 20px",
        }}
      >
        {inputType === "mint" && (
          <MintInputs
            type={1}
            mintAddress={mintAddress}
            onClick={mintCoin}
            handleMintAddressChange={handleMintAddressChange}
            mintAmount={mintAmount}
            handleMintAmountChange={handleMintAmountChange}
          />
        )}

        {inputType === "stake" && (
          <StakeInputs
            type={1}
            mintAddress={mintAddress}
            onClick={mintCoin}
            handleMintAddressChange={handleMintAddressChange}
            mintAmount={mintAmount}
            handleMintAmountChange={handleMintAmountChange}
          />
        )}

        {inputType === "lock" && (
          <LockInputs
            type={1}
            mintAddress={mintAddress}
            onClick={mintCoin}
            handleMintAddressChange={handleMintAddressChange}
            mintAmount={mintAmount}
            handleMintAmountChange={handleMintAmountChange}
          />
        )}

          {inputType === "withdraw" && (
          <WithdrawInputs
            type={1}
            mintAddress={mintAddress}
            onClick={mintCoin}
            handleMintAddressChange={handleMintAddressChange}
            mintAmount={mintAmount}
            handleMintAmountChange={handleMintAmountChange}
          />
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-8 bg-white z-10"></div>
    </main>
  );
}
