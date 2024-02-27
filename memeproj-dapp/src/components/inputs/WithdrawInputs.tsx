import { useEffect, useState } from "react";
import { BrowserProvider } from "ethers";
import { getContract } from "../../../config";

const WithdrawInputs = ({
  type,
  withdrawSuccessMessage,
  setWithdrawSuccessMessage,
  setWithdrawAmount,
  walletKey,
  countdown,
  stakeSuccessMessage,
}) => {
  const [withdrawn, setWithdrawn] = useState(false); // State variable to track if withdrawal has been successfully done
  const [hasStakedCoins, setHasStakedCoins] = useState(false);

  useEffect(() => {
    console.log("Countdown prop:", countdown);
  }, [countdown]);

  const withdrawCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const tx = await contract.withdraw();
      console.log(tx);
      await tx.wait();

      let message = (
        <>
          <p>Withdrawal successful!</p>
        </>
      );

      setWithdrawSuccessMessage(message);
      setWithdrawn(true); // Update state to indicate successful withdrawal
      console.log("Withdrawal Successful");
    } catch (e) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Withdrawal failed: ${decodedError?.args}`);
    }
  };

  const getWithdrawCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const contract = getContract(provider);

    try {
      const withdrawAmount = await contract.getWithdraw(walletKey);
      const withdrawAmountString = withdrawAmount.toString();

      let message = (
        <>
          <p>You will withdraw {withdrawAmountString} NEOcoin</p>
        </>
      );
      if (withdrawAmount > 1) {
        message = (
          <>
            <p>You will withdraw {withdrawAmountString} NEOcoins</p>
          </>
        );
      }
      setWithdrawAmount(withdrawAmount);
      setWithdrawSuccessMessage(message);
      console.log("Withdrawal Balance:", withdrawAmount);
      setHasStakedCoins(true);
    } catch (e) {
      if (e.message.includes("no stakes")) {
        setWithdrawSuccessMessage("You don't have any stakes to withdraw.");
      } else {
        console.error(`Error calling contract function: ${e.message}`);
      }
      setHasStakedCoins(false);
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
            {withdrawSuccessMessage ? (
              <p style={{ color: "white", fontStyle: "italic" }}>
                {withdrawSuccessMessage}
              </p>
            ) : (
              <p style={{ color: "white", fontStyle: "italic" }}>
                Withdraw your coins.
              </p>
            )}
          </h2>
        </div>

        {/* <div
          className="text-center text-sm opacity-80"
          style={{
            position: "absolute",
            bottom: "58.5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {stakeSuccessMessage !== "" && countdown > 0 && (
            <p>Countdown: {countdown}</p>
          )}
        </div> */}

        <button
          onClick={() => {
            console.log("Show Withdraw Balance Button clicked");
            getWithdrawCoin();
          }}
          disabled={withdrawn}
          className={`bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            withdrawn && "opacity-50 cursor-not-allowed"
          }`}
          style={{
            position: "absolute",
            bottom: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Show Withdraw Balance
        </button>

        <button
          onClick={() => {
            console.log("Withdraw Button clicked");
            withdrawCoin();
          }}
          className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style={{
            position: "absolute",
            bottom: "15%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  ) : null;
};

export default WithdrawInputs;
