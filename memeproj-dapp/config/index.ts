import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
  return new Contract(
    "0xDFc3df7B0Fb530f6EC77e8981964f1e81Fac6d09" /* address of the deployed contract */,
    abi as any,
    signer
  );
}
