const MintInput = ({
  type,
  onClick,
  mintAddress,
  handleMintAddressChange,
  mintAmount,
  handleMintAmountChange,
}) => {
  return type === 1 ? (
    <div
      style={{ width: "500px", height: "500px" }}
      className="mr-4 bg-customColor1 rounded-xl"
    >
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

      <button
        onClick={() => {
          console.log("Button clicked");
          onClick(); // Call the onClick function
        }}
      >
        MINT!
      </button>
    </div>
  ) : null;
};

export default MintInput;
