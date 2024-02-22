const Wallet = ({ type, walletKey, onClick }) => {
  return type === 1 ? (
    <div className="flex flex-col items-center">
      <div className="group rounded-lg border border-transparent text-center px-5 py-4 transition-all duration-500">
        <h2 className="mb-1 text-2xl font-semibold font-syber">
          <button
            onClick={() => {
              console.log("Connect Button clicked");
              onClick();
            }}
            className="text-2xl font-semibold"
          >
            {walletKey !== "" ? walletKey : "Connect Wallet"}
          </button>
        </h2>
        <p className="text-center text-sm opacity-80 text-2xl">
          {walletKey !== "" ? "Wallet Connected" : "Wallet Not Connected"}
        </p>
      </div>
    </div>
  ) : null;
};

export default Wallet;
