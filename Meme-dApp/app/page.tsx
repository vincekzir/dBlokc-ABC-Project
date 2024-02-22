"use client";
import { BrowserProvider } from "ethers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getContract } from "../config";
import bg from "../public/green.jpg";

export default function Home() {
  const [walletKey, setwalletKey] = useState("");
  const [currentData, setcurrentData] = useState("");
  const [mintAddress, setMintAddress] = useState("");
  const [mintAmount, setMintAmount] = useState("");

  const handleMintAddressChange = (event) => {
    setMintAddress(event.target.value);
  };

  const handleMintAmountChange = (event) => {
    setMintAmount(event.target.value);
  };

  const connectWallet = async () => {
    const { ethereum } = window as any;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setwalletKey(accounts[0]);
    setcurrentData("Wallet Connected!");
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
      setcurrentData("Coins Minted!");
      console.log("Mint Address:", mintAddress);
      console.log("Mint Amount:", mintAmount);
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Minting failed: ${decodedError?.args}`);
    }
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 relative"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "50%",
        overflow: "hidden", // Hide overflow to prevent scrollbars
      }}
    >
      <div className="absolute top-0 left-0 w-full h-6 bg-white z-10"></div>
      <div className="z-20 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-white pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Image
            src="/logo.png"
            alt="NEO Logo"
            className=""
            width={60}
            height={24}
            priority
          />
          <span className="ml-4 text-xl font-syber">Neo Coin</span>
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://sepolia.arbiscan.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/arbitrum-arb-logo.svg"
              alt="Arbitrum Logo"
              className=""
              width={60}
              height={24}
              priority
            />
          </a>
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://metamask.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/metamask.svg"
              alt="Metamask Logo"
              className=""
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <div
          className={`group rounded-lg border border-transparent text-center px-5 py-4 transition-all duration-500 ${
            walletKey !== "" ? "border-white" : ""
          }`}
        >
          {/* <p className="mb-3 text-center text-sm opacity-50">
         {walletKey != "" ? "Wallet Address" : ""}
         </p> */}
          <h2 className="mb-3 text-2xl font-semibold font-syber">
            <button
              onClick={() => {
                connectWallet();
              }}
              className="mb-1 text-2xl font-semibold"
            >
              {walletKey != "" ? walletKey : " Connect Wallet"}
            </button>
          </h2>
          <p className="text-center text-sm opacity-80 text-2xl">
            {walletKey != "" ? "Wallet Connected" : " Wallet Not Connected"}
          </p>
        </div>
      </div>

      {/* Mint*/}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center">
          <button
            onClick={() => {
              mintCoin();
            }}
          >
            <h2 className={`mb-1 text-3xl font-semibold font-syber`}>
              Mint
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Mint Coin</p>
          </button>
          {/* Input text boxes */}
          <input
            type="text"
            name="mint-address"
            placeholder="Enter Address"
            value={mintAddress}
            onChange={handleMintAddressChange}
            className="border border-gray-300 px-2 py-1 mt-2 bg-green-200 text-black rounded-xl"
          />
          <input
            type="text"
            name="mint-amount"
            placeholder="Enter Amount"
            value={mintAmount}
            onChange={handleMintAmountChange}
            className="border border-gray-300 px-2 py-1 mt-2 bg-green-200 text-black"
          />
        </div>

        {/* Stake*/}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center">
          <button
            onClick={() => {
              mintCoin();
            }}
          >
            <h2 className={`mb-1 text-3xl font-semibold font-syber`}>
              Stake
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Stake Coin</p>
          </button>
          {/* Input text boxes */}
          <input
            type="text"
            placeholder="Enter Address"
            className="border border-gray-300 px-2 py-1 mt-2 bg-light-green-100 text-black"
          />
          <input
            type="text"
            placeholder="Enter Amount"
            className="border border-gray-300 px-2 py-1 mt-2 bg-light-green-100 text-black"
          />
        </div>

        {/* Lock*/}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center">
          <button
            onClick={() => {
              mintCoin();
            }}
          >
            <h2 className={`mb-1 text-3xl font-semibold font-syber`}>
              Lock
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Lock Coin</p>
          </button>
          {/* Input text boxes */}
          <input
            type="text"
            placeholder="Enter Address"
            className="border border-gray-300 px-2 py-1 mt-2 bg-light-green-100 text-black"
          />
          <input
            type="text"
            placeholder="Enter Amount"
            className="border border-gray-300 px-2 py-1 mt-2 bg-light-green-100 text-black"
          />
        </div>

        {/* Withdraw*/}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center">
          <button
            onClick={() => {
              mintCoin();
            }}
          >
            <h2 className={`mb-1 text-3xl font-semibold font-syber`}>
              Withdraw
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Withdraw Coin
            </p>
          </button>
          {/* Input text boxes */}
          <input
            type="text"
            placeholder="Enter Address"
            className="border border-gray-300 px-2 py-1 mt-2 bg-light-green-100 text-black"
          />
          <input
            type="text"
            placeholder="Enter Amount"
            className="border border-gray-300 px-2 py-1 mt-2 bg-light-green-100 text-black"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-6 bg-white z-10"></div>
      </div>
    </main>
  );
}
