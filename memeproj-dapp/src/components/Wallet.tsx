const Wallet = ({ type, walletKey, onClick }) => {
  return type === 1 ? (
    <div className="flex flex-col items-center">
      <div className="group rounded-lg border border-transparent text-center px-5 py-2 transition-all duration-500">
        <h2 className="text-2xl font-semibold font-syber">
          <button
            onClick={() => {
              console.log("Connect Button clicked");
              onClick();
            }}
            className="text-2xl font-semibold"
          >
            {walletKey !== "" ? "Wallet Connected" : "Connect Wallet"}
          </button>
        </h2>
        {/* <p className="text-center text-sm opacity-80 text-2xl">
          {walletKey !== "" ? "Wallet Connected" : "Wallet Not Connected"}
        </p> */}
      </div>
    </div>
  ) : null;
};

export default Wallet;
