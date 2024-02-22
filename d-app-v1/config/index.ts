import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
    return new Contract(
        "0x3f009ECAd1Aab969A94649aADaf854D5d9347FCA", // adddress of the deployed contract
        abi as any,
        signer
    );
}