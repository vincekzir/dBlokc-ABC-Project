const ShowButtons = ({ type, onClick }) => {
  return type === 1 ? (
    <button
      onClick={onClick}
      className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center"
    >
      <h2 className={`mb-1 text-3xl font-semibold font-syber`}>
        Mint
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        Generate yor Coins!
      </p>
    </button>
  ) : type === 2 ? (
    <button
      onClick={onClick}
      className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center"
    >
      <h2 className={`mb-1 text-3xl font-semibold font-syber`}>
        Stake
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Stake Now.</p>
    </button>
  ) : type === 3 ? (
    <button
      onClick={onClick}
      className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center"
    >
      <h2 className={`mb-1 text-3xl font-semibold font-syber`}>
        Lock
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Lock the Fuck In</p>
    </button>
  ) : type === 4 ? (
    <button
      onClick={onClick}
      className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center"
    >
      <h2 className={`mb-1 text-3xl font-semibold font-syber`}>
        Withdraw
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Chaching!</p>
    </button>
  ) : null;
};

export default ShowButtons;
