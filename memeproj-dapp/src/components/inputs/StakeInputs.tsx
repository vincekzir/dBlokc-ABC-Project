"use client";
import { useEffect, useState } from "react";
import { BrowserProvider } from "ethers";
import { getContract } from "../../../config";

const StakeInputs = ({
  type,
  stakeAmount,
  handleStakeAmountChange,
  stakeSuccessMessage,
  setStakeSuccessMessage,
  setStakeAmountCoin,
  stakeAmountCoin,
}) => {
  const stakeCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const tx = await contract.stake(stakeAmount);
      console.log(tx);
      await tx.wait();

      let message = (
        <>
          <p>Staking successful!</p>
          <p>You Staked {stakeAmount} NEOcoin</p>
        </>
      );
      if (stakeAmount > 1) {
        message = (
          <>
            <p>Staking successful!</p>
            <p>You Staked {stakeAmount} NEOcoins</p>
          </>
        );
      }
      setStakeSuccessMessage(message);
      console.log("Stake Amount:", stakeAmount);
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Staking failed: ${decodedError?.args}`);
    }
  };

  const getStakeCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const stakeAmountCoin = await contract.getStake(signer);
      setStakeAmountCoin(stakeAmountCoin);
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
          className="mb-10 justify-center items-center text-center group rounded-lg bg-green-500 bg-opacity-10 border border-transparent px-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col"
          style={{
            position: "absolute",
            top: "24%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h2 className="text-2xl font-semibold font-syber">
            {stakeSuccessMessage ? (
              <p style={{ color: "white", fontStyle: "italic" }}>
                {stakeSuccessMessage}
              </p>
            ) : (
              <p style={{ color: "white", fontStyle: "italic" }}>
                Stake your coins.
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
            type="number"
            name="stake-amount"
            placeholder="Enter Amount"
            value={stakeAmount}
            onChange={handleStakeAmountChange}
            className="border border-gray-300 px-4 py-4 text-black rounded-xl"
          />
          <button
            onClick={() => {
              console.log("Staked Amount clicked");
              getStakeCoin();
            }}
            className="text-sm opacity-50"
            style={{
              position: "absolute",
              bottom: "170%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Staked Coin: {`${stakeAmountCoin}`}
          </button>
        </div>

        <button
          onClick={() => {
            console.log("Stake Input Button clicked");
            stakeCoin();
          }}
          className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style={{
            position: "absolute",
            bottom: "15%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          STAKE
        </button>
      </div>
    </div>
  ) : null;
};

export default StakeInputs;
