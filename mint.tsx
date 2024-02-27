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

//// HEREEEEEEEEEEEEEEEEEEEE
        


      <div
        className="absolute"
        style={{
          position: "absolute",
          bottom: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <section className="w-full h-full flex text-white text-2xl text-opacity-50 mt-3">
          <button
            className={`flex justify-center items-center bg-green-500 bg-opacity-10 border-2 border-white border-opacity-20 rounded-tl-2xl focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25 focus:text-opacity-60 ${
              activeButton === "Mint" ? "bg-opacity-30 text-opacity-100" : ""
            }`}
            style={{ width: "60%", height: "70px" }}
            onClick={() => handleButtonClick("Mint")}
          >
            <p>Mint</p>
          </button>

          <button
            className={`flex justify-center items-center bg-green-500 bg-opacity-10 border-2 border-white border-opacity-20 focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25 focus:text-opacity-60 ${
              activeButton === "Stake" ? "bg-opacity-30 text-opacity-100" : ""
            }`}
            style={{ width: "60%", height: "70px" }}
            onClick={() => handleButtonClick("Stake")}
          >
            <p>Stake</p>
          </button>

          <button
            className={`flex justify-center items-center bg-green-500 bg-opacity-10 border-2 border-white border-opacity-20 focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25 focus:text-opacity-60 ${
              activeButton === "Lock" ? "bg-opacity-30 text-opacity-100" : ""
            }`}
            style={{ width: "60%", height: "70px" }}
            onClick={() => handleButtonClick("Lock")}
          >
            <p>Lock</p>
          </button>

          <button
            className={`flex justify-center items-center bg-green-500 bg-opacity-10 border-2 border-white border-opacity-20 rounded-tr-2xl focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25 focus:text-opacity-60 ${
              activeButton === "Withdraw"
                ? "bg-opacity-30 text-opacity-100"
                : ""
            }`}
            style={{ width: "60%", height: "70px" }}
            onClick={() => handleButtonClick("Withdraw")}
          >
            <p>Withdraw</p>
          </button>
        </section>
      </div>

      {/* Main content section */}
      <section className="border-2 border-white border-opacity-25 h-[70vh] rounded-b-2xl bg-purple-900 bg-opacity-10 ">
        <section className="flex">
          <div
            id="Default"
            className={`${activeButton === "Mint" ? "hidden" : ""} ${
              activeButton === "Stake" ? "hidden" : ""
            } ${activeButton === "Lock" ? "hidden" : ""} ${
              activeButton === "Withdraw" ? "hidden" : ""
            }`}
          >
            {/* <mintInputs
              type={1}
              mintAddress={mintAddress}
              onClick={mintCoin}
              handleMintAddressChange={handleMintAddressChange}
              mintAmount={mintAmount}
              handleMintAmountChange={handleMintAmountChange}
            /> */}
          </div>
        </section>
      </section>




//   const elapsedStakeTime = await myContract.getElapsedStakeTime();
//     console.log("Elapsed Stake Time (seconds):", elapsedStakeTime.toString());

//          function getElapsedStakeTime() public view returns (uint256) {
//         uint256 time = (block.timestamp - _lastStakeTimestamp[msg.sender]);
//         return time;
//   } 

//   const ethAmount = ethers.parseUnits("10", 18);
//   await myTokenContract.connect(owner).mint(owner.address, ethAmount);

//   const ethAmountStake = ethers.parseUnits("10", 18);
//   await myTokenContract.connect(owner).stake(ethAmountStake);