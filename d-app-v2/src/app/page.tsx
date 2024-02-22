"use client";
import { BrowserProvider } from "ethers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getContract } from "../../config";
import Button from "../components/button";
import MintInput from "../components/mint_input";

export default function Home() {
  const [walletKey, setwalletKey] = useState("");
  const [currentData, setcurrentData] = useState("");
  const [mintAddress, setMintAddress] = useState("");
  const [mintAmount, setMintAmount] = useState("");
  const [showComponent, setShowComponent] = useState(false);

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
      setcurrentData("Coins Minted!");
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
    setShowComponent(true); // Set showComponent to true when the "Mint Coin" button is clicked
  };

  return (
    <main className="flex flex-col items-center justify-between p-10">
      <div className="absolute top-0 left-0 w-full h-8 bg-customColor1 z-10"></div>
      <div className="flex justify-center items-center mb-7">
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

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <div
          style={{ width: "500px", height: "500px" }}
          className="mr-5 bg-customColor1 rounded-xl"
        >
          <Button
            type={1}
            name={walletKey != "" ? "Wallet Connected" : "Connect Wallet"}
            message={walletKey != "" ? walletKey : "Connect Wallet Here"}
            onClick={connectWallet}
          />
          <Button
            type={2}
            name={"Mint Coin"}
            message={"Mint Coin Here"}
            onClick={handleMintCoinClick}
          />
          <Button
            type={2}
            name={"Stake Coin"}
            message={"Mint Coin Here"}
            onClick={handleMintCoinClick}
          />
        </div>
        <div
          style={{ width: "500px", height: "500px" }}
          className="mr-4 bg-customColor1 rounded-xl"
        >
          {showComponent && (
            <MintInput
              type={1}
              mintAddress={mintAddress}
              onClick={mintCoin}
              handleMintAddressChange={handleMintAddressChange}
              mintAmount={mintAmount}
              handleMintAmountChange={handleMintAmountChange}
            />
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-customColor1 z-10"></div>
    </main>
  );
}
