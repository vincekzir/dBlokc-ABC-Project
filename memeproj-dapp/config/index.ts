import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
  return new Contract(
    "0xDB408CBA0f4C648dbf7559c5f4Fb28Bdf9Bb65c5" /* address of the deployed contract */,
    abi as any,
    signer
  );
}
