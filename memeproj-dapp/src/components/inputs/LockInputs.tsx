const LockInputs = ({
  type,
  mintAddress,
  mintAmount,
  handleMintAddressChange,
  handleMintAmountChange,
  onClick,
}) => {
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
          INPUT
        </h2>
        </div>



        <button
          onClick={() => {
            console.log("Stake Input Button clicked");
            onClick();
          }}
          className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
          STAKE
        </button>
      </div>
    </div>
  ) : null;
};

export default LockInputs;
