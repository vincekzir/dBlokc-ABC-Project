// import { useEffect, useState } from "react";

const Wallet = ({
  type,
  walletKey,
  setWalletKey,
}: {
  type: any;
  walletKey: any;
  setWalletKey: any;
}) => {
  const connectWallet = async () => {
    const { ethereum } = window as any;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setWalletKey(accounts[0]);
  };

  return type === 1 ? (
    <div className="flex flex-col items-center">
      <div className="group rounded-lg border border-transparent text-center px-5 py-2 transition-all duration-500">
        <h2 className="text-2xl font-semibold font-syber">
          <button
            onClick={() => {
              console.log("Connect Button clicked");
              connectWallet();
            }}
            className="text-2xl font-semibold"
          >
            {walletKey !== "" ? "Wallet Connected" : "Connect Wallet"}
          </button>
        </h2>
        <p className="text-center text-sm opacity-80">
          {walletKey !== "" ? walletKey : "Wallet Not Connected"}
        </p>
      </div>
    </div>
  ) : null;
};

export default Wallet;
