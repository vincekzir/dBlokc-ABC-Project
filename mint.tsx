<button
            onClick={() => {
              mintCoin();
            }}
          >
            <h2 className={`mb-1 text-3xl font-semibold font-syber`}>
              Mint
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Mint Coin</p>
          </button>
          {/* Input text boxes */}
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

           {/* 
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center">
          <button
            onClick={() => {
              mintCoin();
            }}
          >
            <h2 className={`mb-1 text-3xl font-semibold font-syber`}>
              Stake
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Stake Coin</p>
          </button>

          <input
            type="text"
            placeholder="Enter Address"
            className="border border-gray-300 px-2 py-1 mt-2 bg-light-green-100 text-black"
          />
          <input
            type="text"
            placeholder="Enter Amount"
            className="border border-gray-300 px-2 py-1 mt-2 bg-light-green-100 text-black"
          />
        </div>


        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center">
          <button
            onClick={() => {
              mintCoin();
            }}
          >
            <h2 className={`mb-1 text-3xl font-semibold font-syber`}>
              Lock
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Lock Coin</p>
          </button>

          <input
            type="text"
            placeholder="Enter Address"
            className="border border-gray-300 px-2 py-1 mt-2 bg-light-green-100 text-black"
          />
          <input
            type="text"
            placeholder="Enter Amount"
            className="border border-gray-300 px-2 py-1 mt-2 bg-light-green-100 text-black"
          />
        </div>


        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center">
          <button
            onClick={() => {
              mintCoin();
            }}
          >
            <h2 className={`mb-1 text-3xl font-semibold font-syber`}>
              Withdraw
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none f"></span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Withdraw Coin
            </p>
          </button>

          <input
            type="text"
            placeholder="Enter Address"
            className="border border-gray-300 px-2 py-1 mt-2 bg-light-green-100 text-black"
          />
          <input
            type="text"
            placeholder="Enter Amount"
            className="border border-gray-300 px-2 py-1 mt-2 bg-light-green-100 text-black"
          />
        </div> */}

        // <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-center items-center">