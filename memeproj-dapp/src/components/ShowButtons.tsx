const ShowButtons = ({ type, onClick }) => {
  return type === 1 ? (
    <button
      onClick={onClick}
      className="rounded-lg border border-transparent px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center"
      style={{
        borderRadius: "20px 0 0 0",
      }}
    >
      <h2 className={`text-3xl font-semibold font-syber`}>
        Mint
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Generate Coins.</p>
    </button>
  ) : type === 2 ? (
    <button
      onClick={onClick}
      className="rounded-lg border border-transparent px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center"
      style={{
        borderRadius: "0 0 0 0 ",
      }}
    >
      <h2 className={`text-3xl font-semibold font-syber`}>
        Stake
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Stake Now.</p>
    </button>
  ) : type === 3 ? (
    <button
      onClick={onClick}
      className="rounded-lg border border-transparent px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center"
      style={{
        borderRadius: "0 0 0 0 ",
      }}
    >
      <h2 className={`text-3xl font-semibold font-syber`}>
        Lock
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Check your Time</p>
    </button>
  ) : type === 4 ? (
    <button
      onClick={onClick}
      className="rounded-lg border border-transparent px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center"
      style={{
        borderRadius: "0 20px 0 0 ",
      }}
    >
      <h2 className={`text-3xl font-semibold font-syber`}>
        Withdraw
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Chaching!</p>
    </button>
  ) : null;
};

export default ShowButtons;
