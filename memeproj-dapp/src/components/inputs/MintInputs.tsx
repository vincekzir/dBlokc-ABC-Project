const MintInputs = ({
  type,
  mintAddress,
  mintAmount,
  handleMintAddressChange,
  handleMintAmountChange,
  onClick,
}) => {
  return type === 1 ? (
    <div>
      <p>MINT</p>

      <div
        className="flex flex-col gap-4 justify-center items-center text-center"
        style={{
          width: "853px",
          height: "400px",
        }}
      >
        <div className="flex gap-4">
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
            console.log("Button clicked");
            onClick();
          }}
          className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          MINT!
        </button>
      </div>
    </div>
  ) : null;
};

export default MintInputs;
