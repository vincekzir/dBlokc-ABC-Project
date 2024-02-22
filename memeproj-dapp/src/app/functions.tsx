// const mintCoin = async () => {
//   const { ethereum } = window as any;
//   const provider = new BrowserProvider(ethereum);
//   const signer = await provider.getSigner();
//   const contract = getContract(signer);
//   try {
//     const tx = await contract.mint(mintAddress, mintAmount);
//     console.log(tx);
//     await tx.wait();
//     setcurrentData("Coins Minted!");
//     console.log("Mint Address:", mintAddress);
//     console.log("Mint Amount:", mintAmount);
//   } catch (e: any) {
//     const decodedError = contract.interface.parseError(e.data);
//     alert(`Minting failed: ${decodedError?.args}`);
//   }
// };

// const handleMintAddressChange = (event) => {
//   setMintAddress(event.target.value);
// };

// const handleMintAmountChange = (event) => {
//   setMintAmount(event.target.value);
// };
