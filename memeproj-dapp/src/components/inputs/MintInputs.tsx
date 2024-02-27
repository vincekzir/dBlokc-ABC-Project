"use client";
import { useEffect, useState } from "react";
import { BrowserProvider } from "ethers";
import { getContract } from "../../../config";

const MintInputs = ({
  type,
  mintAddress,
  mintAmount,
  handleMintAddressChange,
  handleMintAmountChange,
  mintSuccessMessage,
  setMintSuccessMessage,
  setMintAmountCoin,
  mintAmountCoin,
}: {
  type: any;
  mintAddress: any;
  mintAmount: any;
  handleMintAddressChange: any;
  handleMintAmountChange: any;
  mintSuccessMessage: any;
  setMintSuccessMessage: any;
  setMintAmountCoin: any;
  mintAmountCoin: any;
}) => {
  const mintCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const tx = await contract.mint(mintAddress, mintAmount);
      console.log(tx);
      await tx.wait();

      let message = (
        <>
          <p>Minting successful!</p>
          <p>You Minted {mintAmount} NEOcoin</p>
        </>
      );
      if (mintAmount > 1) {
        message = (
          <>
            <p>Minting successful!</p>
            <p>You Minted {mintAmount} NEOcoins</p>
          </>
        );
      }

      setMintSuccessMessage(message);
      alert(
        `IMPORTANT! Minting successful!\nCopy the given Address below to your Metamask Wallet.`
      );
      console.log("Mint Address:", mintAddress);
      console.log("Mint Amount:", mintAmount);
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Minting failed: ${decodedError?.args}`);
    }
  };

  const getMintCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const balance = await contract.balanceOf(signer);
      const mintAmountCoin = Number(balance) / 1000000000000000000;
      setMintAmountCoin(mintAmountCoin);
    } catch (e: any) {
      console.log("Error data:", e.data);
      if (e.data) {
        const decodedError = contract.interface.parseError(e.data);
        console.log(`Fetching stake failed: ${decodedError?.args}`);
      } else {
        console.log("An unknown error occurred.");
      }
    }
  };

  return type === 1 ? (
    <div>
      <div
        className="flex flex-col gap-4 justify-center items-center text-center"
        style={{
          width: "853px",
          height: "400px",
        }}
      >
        <div
          className="mb-10 justify-center items-center text-center group rounded-lg bg-green-500 bg-opacity-10 border border-transparent px-5 transition-colors flex flex-col"
          style={{
            position: "absolute",
            top: "24%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h2 className="text-2xl font-semibold font-syber">
            {mintSuccessMessage ? (
              <p style={{ color: "white", fontStyle: "italic" }}>
                {mintSuccessMessage}
                <p
                  className="text-sm opacity-50"
                  style={{
                    position: "absolute",
                    top: "460%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Contract Ad: 0xDB408CBA0f4C648dbf7559c5f4Fb28Bdf9Bb65c5
                </p>
              </p>
            ) : (
              <p style={{ color: "white", fontStyle: "italic" }}>
                Mint your coins.
              </p>
            )}
          </h2>
        </div>

        <div
          className="flex gap-4"
          style={{
            position: "absolute",
            bottom: "27%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <input
            type="text"
            name="mint-address"
            placeholder="Enter Address"
            value={mintAddress}
            onChange={handleMintAddressChange}
            className="border border-gray-300 px-4 py-4 text-black rounded-xl"
          />
          <input
            type="number"
            name="mint-amount"
            placeholder="Enter Amount"
            value={mintAmount}
            onChange={handleMintAmountChange}
            className="border border-gray-300 px-4 py-4 text-black rounded-xl"
          />
        </div>
        <button
          onClick={() => {
            console.log("Mint Amount clicked");
            getMintCoin();
          }}
          className="text-sm opacity-50"
          style={{
            position: "absolute",
            bottom: "59%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Minted Coin: {`${mintAmountCoin}`}
        </button>
        <button
          onClick={() => {
            console.log("Mint Input Button clicked");
            mintCoin();
          }}
          className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style={{
            position: "absolute",
            bottom: "15%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          MINT
        </button>
      </div>
    </div>
  ) : null;
};

export default MintInputs;
