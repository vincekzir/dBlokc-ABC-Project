"use client";
import { BrowserProvider } from "ethers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getContract } from "../config";

export default function Home() {
  const [walletKey, setwalletKey] = useState("");
  const [currentData, setcurrentData] = useState("");
  // const [mintAmount, setMintAmount] = useState<number>(0);

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
      const tx = await contract.mint(walletKey, 1);
      console.log(tx);
      await tx.wait();
      setcurrentData("Coins Minted!");
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Minting failed: ${decodedError?.args}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-gray-400 to-black">
      <div className="z-20 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="mb-32 flex flex-col items-center">
        <div className="mb-25 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
          <h2 className="text-2xl font-semibold">
            <button
              onClick={() => {
                connectWallet();
              }}
              className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            >
              {walletKey != "" ? walletKey : " Connect wallet"}
            </button>
          </h2>
        </div>

        <div className="mt-20 group rounded-lg border border-transparent px-5 py-4  text-center lg:max-w-5xl lg:w-fulltransition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb- text-2xl font-semibold">
            <button
              onClick={() => {
                mintCoin();
              }}
              className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            >
              Mint -&gt;&nbsp;&nbsp;
            </button>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Mint Here!</p>
        </div>

        {/* Second row with "Stake" and "Withdraw" buttons */}
        <div className="grid grid-cols-2 gap-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left mt-5">
          {/* "Stake" button */}
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              <button
                onClick={() => {
                  stakeCoin();
                }}
                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              >
                Stake -&gt;
              </button>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Stake Here!</p>
          </div>

          {/* "Withdraw" button */}
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              <button
                onClick={() => {
                  withdrawCoin();
                }}
                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              >
                Withdraw Here -&gt;
              </button>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Stake Here!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
