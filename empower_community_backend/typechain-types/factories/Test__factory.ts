/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Test, TestInterface } from "../Test";

const _abi = [
  {
    inputs: [],
    name: "changeValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526025600055348015601457600080fd5b506091806100236000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80633fa4f245146037578063c5cf81d5146051575b600080fd5b603f60005481565b60405190815260200160405180910390f35b605960008055565b00fea26469706673582212207569aa053a19b9012c6dafbb3da0e2663230b0300af8de5cd2de6980c27c725964736f6c63430008090033";

type TestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Test__factory extends ContractFactory {
  constructor(...args: TestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Test";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Test> {
    return super.deploy(overrides || {}) as Promise<Test>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Test {
    return super.attach(address) as Test;
  }
  connect(signer: Signer): Test__factory {
    return super.connect(signer) as Test__factory;
  }
  static readonly contractName: "Test";
  public readonly contractName: "Test";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestInterface {
    return new utils.Interface(_abi) as TestInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Test {
    return new Contract(address, _abi, signerOrProvider) as Test;
  }
}