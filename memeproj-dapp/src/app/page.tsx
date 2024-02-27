"use client";
import { BrowserProvider } from "ethers";
import { JsonRpcProvider } from "ethers/providers";
import { useEffect, useState } from "react";
import { getContract } from "../../config";
import Image from "next/image";

import Background from "../../public/green.jpg";
import Wallet from "../components/Wallet";
import ShowButtons from "../components/ShowButtons";
import MintInputs from "../components/inputs/MintInputs";
import StakeInputs from "../components/inputs/StakeInputs";
// import LockInputs from "../components/inputs/LockInputs";
import WithdrawInputs from "../components/inputs/WithdrawInputs";
// import MessageInputs from "../components/inputs/MessageInputs";

export default function Home() {
  const [walletKey, setWalletKey] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const [inputType, setInputType] = useState("");
  const [mintAddress, setMintAddress] = useState("");
  const [mintAmount, setMintAmount] = useState<number>(0);
  const [stakeAmount, setStakeAmount] = useState<number>(0);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [mintSuccessMessage, setMintSuccessMessage] = useState("");
  const [stakeSuccessMessage, setStakeSuccessMessage] = useState("");
  const [withdrawSuccessMessage, setWithdrawSuccessMessage] = useState("");
  const [mintAmountCoin, setMintAmountCoin] = useState("");
  const [stakeAmountCoin, setStakeAmountCoin] = useState("");

  const [countdown, setCountdown] = useState(0);

  // useEffect(() => {
  //   let timer;
  //   if (stakeSuccessMessage !== "" && countdown > 0) {
  //     console.log("Staking successful. Starting countdown...");
  //     timer = setInterval(() => {
  //       setCountdown((prevCountdown) => {
  //         if (prevCountdown === 1) {
  //           clearInterval(timer);
  //           return 0; // Ensure countdown stops at zero
  //         } else {
  //           return prevCountdown - 1;
  //         }
  //       });
  //     }, 1000);
  //   }

    return () => clearInterval(timer);
  }, [stakeSuccessMessage, countdown]);
  const handleMintAddressChange = (event) => {
    setMintAddress(event.target.value);
  };

  const handleMintAmountChange = (event) => {
    setMintAmount(event.target.value);
  };

  const handleStakeAmountChange = (event) => {
    setStakeAmount(event.target.value);
  };

  const handleMintCoinClick = () => {
    setShowComponent(true);
    setInputType("mint");
    setStakeAmount(0);
    // setStakeSuccessMessage("");
    // // setStakeAmountCoin("");
    setWithdrawSuccessMessage("");
    // setWithdrawAmount("");
  };

  const handleStakeCoinClick = () => {
    setShowComponent(true);
    setInputType("stake");
    setMintAddress("");
    setMintAmount(0);
    // setMintSuccessMessage("");
    // // setMintAmountCoin("");
    setWithdrawSuccessMessage("");
    // setWithdrawAmount("");
  };

  const handleWithdrawCoinClick = async () => {
    setShowComponent(true);
    setInputType("withdraw");
    setMintAddress("");
    setMintAmount(0);
    setMintSuccessMessage("");
    // // setMintAmountCoin("");
    setStakeAmount(0);
    setStakeSuccessMessage("");
    // // setStakeAmountCoin("");
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
        overflow: "hidden",
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
        <Wallet type={1} walletKey={walletKey} setWalletKey={setWalletKey} />
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
        <div className="grid grid-cols-3 gap-14 justify-center items-center">
          <ShowButtons type={1} onClick={handleMintCoinClick} />
          <ShowButtons type={2} onClick={handleStakeCoinClick} />
          <ShowButtons type={4} onClick={handleWithdrawCoinClick} />
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
        <div
          className="mb-10 justify-center items-center text-center group rounded-lg bg-green-500 bg-opacity-10 border border-transparent px-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col"
          style={{
            position: "absolute",
            top: "37%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h2 className="text-2xl font-semibold font-syber">
            {walletKey ? (
              <p style={{ color: "white", fontStyle: "italic" }}></p>
            ) : (
              <p style={{ color: "white", fontStyle: "italic" }}>
                Start by Connecting YOur Wallet.
              </p>
            )}
          </h2>
        </div>

        {inputType === "mint" && (
          <MintInputs
            type={1}
            mintAddress={mintAddress}
            handleMintAddressChange={handleMintAddressChange}
            mintAmount={mintAmount}
            handleMintAmountChange={handleMintAmountChange}
            mintSuccessMessage={mintSuccessMessage}
            setMintSuccessMessage={setMintSuccessMessage}
            setMintAmountCoin={setMintAmountCoin}
            mintAmountCoin={mintAmountCoin}
          />
        )}
        {inputType === "stake" && (
          <StakeInputs
            type={1}
            stakeAmount={stakeAmount}
            handleStakeAmountChange={handleStakeAmountChange}
            stakeSuccessMessage={stakeSuccessMessage}
            setStakeSuccessMessage={setStakeSuccessMessage}
            setStakeAmountCoin={setStakeAmountCoin}
            stakeAmountCoin={stakeAmountCoin}
          />
        )}
        {inputType === "withdraw" && (
          <WithdrawInputs
            type={1}
            withdrawSuccessMessage={withdrawSuccessMessage}
            setWithdrawSuccessMessage={setWithdrawSuccessMessage}
            setWithdrawAmount={setWithdrawAmount}
            walletKey={walletKey}
            // countdown={countdown}
            // stakeSuccessMessage={stakeSuccessMessage}
          />
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-8 bg-white z-10 flex justify-center items-center">
        <p className="t text-black">
          by Vince Kazer M. Villasor - ABC04 Project
        </p>
      </div>
    </main>
  );
}
