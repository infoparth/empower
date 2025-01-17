/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Rate, RateInterface } from "../Rate";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "newDTI",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "oldDTI",
        type: "uint64",
      },
    ],
    name: "DTIChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousDeployer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newDeployer",
        type: "address",
      },
    ],
    name: "DeployerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "newLTI",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "oldLTI",
        type: "uint32",
      },
    ],
    name: "LTVChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "_newrateOfInterest",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "oldrateOfInterest",
        type: "uint32",
      },
    ],
    name: "RateChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "DTI",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newDeployer",
        type: "address",
      },
    ],
    name: "changeDeployer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rateOfInterest",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieveDTI",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieveLTV",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieveRate",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieveTotalAllowableFunds",
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
  {
    inputs: [],
    name: "retrieveTotalLoansDisbursed",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieveTotalPreApprovedLoans",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_LTV",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllowableFunds",
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
  {
    inputs: [],
    name: "totalLoansDisbursed",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPreApprovedLoans",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_newDTI",
        type: "uint64",
      },
    ],
    name: "updateDTI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_newLTV",
        type: "uint32",
      },
    ],
    name: "updateLTV",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_newrateOfInterest",
        type: "uint32",
      },
    ],
    name: "updateRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newTotalAllowableFunds",
        type: "uint256",
      },
    ],
    name: "updateTotalAllowableFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "_newTotalLoansDisbursed",
        type: "uint128",
      },
    ],
    name: "updateTotalLoansDisbursed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "_newTotalPreApprovedLoans",
        type: "uint128",
      },
    ],
    name: "updateTotalPreApprovedLoans",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200102238038062001022833981016040819052620000349162000184565b6200003f3362000078565b600180546001600160a01b0319166001600160a01b03841617905580516200006f906005906020840190620000c8565b505050620002c1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620000d69062000284565b90600052602060002090601f016020900481019282620000fa576000855562000145565b82601f106200011557805160ff191683800117855562000145565b8280016001018555821562000145579182015b828111156200014557825182559160200191906001019062000128565b506200015392915062000157565b5090565b5b8082111562000153576000815560010162000158565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200019857600080fd5b82516001600160a01b0381168114620001b057600080fd5b602084810151919350906001600160401b0380821115620001d057600080fd5b818601915086601f830112620001e557600080fd5b815181811115620001fa57620001fa6200016e565b604051601f8201601f19908116603f011681019083821181831017156200022557620002256200016e565b8160405282815289868487010111156200023e57600080fd5b600093505b8284101562000262578484018601518185018701529285019262000243565b82841115620002745760008684830101525b8096505050505050509250929050565b600181811c908216806200029957607f821691505b60208210811415620002bb57634e487b7160e01b600052602260045260246000fd5b50919050565b610d5180620002d16000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c80637963e50f116100e3578063b272839a1161008c578063dc881c4c11610066578063dc881c4c1461041e578063defdfae614610446578063f2fde38b1461045957600080fd5b8063b272839a146103c8578063b9e9c7bc146103e2578063d5f39488146103fe57600080fd5b80638da5cb5b116100bd5780638da5cb5b1461036e5780639dcf8241146103ad5780639ee9c1d1146103c057600080fd5b80637963e50f1461033657806381a3897914610349578063867dec1a1461035c57600080fd5b80633824e75c11610145578063619e6ccc1161011f578063619e6ccc146102d8578063715018a61461031b57806375734cb51461032357600080fd5b80633824e75c146102995780633bfb8ee5146102b0578063491bb081146102c557600080fd5b80631fc2a361116101765780631fc2a3611461021657806324779e291461024257806325f5a8e01461026c57600080fd5b806304d277551461019d57806306fdde03146101d9578063178d8ae3146101ee575b600080fd5b60015474010000000000000000000000000000000000000000900463ffffffff165b60405163ffffffff90911681526020015b60405180910390f35b6101e161046c565b6040516101d09190610b7c565b6001546101bf9074010000000000000000000000000000000000000000900463ffffffff1681565b6001546101bf907801000000000000000000000000000000000000000000000000900463ffffffff1681565b6001547801000000000000000000000000000000000000000000000000900463ffffffff166101bf565b6002546102809067ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016101d0565b6102a260045481565b6040519081526020016101d0565b6102c36102be366004610bef565b6104fa565b005b6102c36102d3366004610c20565b61057d565b6002546801000000000000000090046fffffffffffffffffffffffffffffffff165b6040516fffffffffffffffffffffffffffffffff90911681526020016101d0565b6102c361060d565b6102c3610331366004610c46565b610621565b6102c3610344366004610c78565b6106f6565b6102c3610357366004610c46565b61077c565b60025467ffffffffffffffff16610280565b60005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101d0565b6102c36103bb366004610c20565b610840565b6004546102a2565b6003546fffffffffffffffffffffffffffffffff166102fa565b6003546102fa906fffffffffffffffffffffffffffffffff1681565b6001546103889073ffffffffffffffffffffffffffffffffffffffff1681565b6002546102fa906801000000000000000090046fffffffffffffffffffffffffffffffff1681565b6102c3610454366004610c91565b6108d7565b6102c3610467366004610c91565b6109cf565b6005805461047990610cc7565b80601f01602080910402602001604051908101604052809291908181526020018280546104a590610cc7565b80156104f25780601f106104c7576101008083540402835291602001916104f2565b820191906000526020600020905b8154815290600101906020018083116104d557829003601f168201915b505050505081565b610502610a86565b6002805467ffffffffffffffff8381167fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000083168117909355604080519190921680825260208201939093527f11b7e12bc7ba69838b4508dbaa630616d7d791f065b494e02002ad9b91c0b20e91015b60405180910390a15050565b610585610a86565b6001805463ffffffff838116740100000000000000000000000000000000000000008181027fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff85161790945560408051918252939092041660208201819052917f2597e6d1348e47ad5a08a8304cdd26bddeb8e697547f54397719be5e5637b0d69101610571565b610615610a86565b61061f6000610b07565b565b60015473ffffffffffffffffffffffffffffffffffffffff1633146106a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f7420416c6c6f77656400000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600280546fffffffffffffffffffffffffffffffff90921668010000000000000000027fffffffffffffffff00000000000000000000000000000000ffffffffffffffff909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163314610777576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f7420416c6c6f776564000000000000000000000000000000000000000000604482015260640161069e565b600455565b60015473ffffffffffffffffffffffffffffffffffffffff1633146107fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f7420416c6c6f776564000000000000000000000000000000000000000000604482015260640161069e565b600380547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055565b610848610a86565b6001805463ffffffff83811678010000000000000000000000000000000000000000000000008181027fffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffffff85161790945560408051949093049091168084526020840191909152917fae97aa11c94649dc81938b01ef9b5bc13a481058d2a3a637dde62fb7f16d9ae99101610571565b60015473ffffffffffffffffffffffffffffffffffffffff163314610958576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f7420416c6c6f776564000000000000000000000000000000000000000000604482015260640161069e565b6001805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907fb425bf30023a30c35ee17f3f416360da7ea96a46b589cfa6a14f39dc98a52bca90600090a35050565b6109d7610a86565b73ffffffffffffffffffffffffffffffffffffffff8116610a7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161069e565b610a8381610b07565b50565b60005473ffffffffffffffffffffffffffffffffffffffff16331461061f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161069e565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208083528351808285015260005b81811015610ba957858101830151858201604001528201610b8d565b81811115610bbb576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600060208284031215610c0157600080fd5b813567ffffffffffffffff81168114610c1957600080fd5b9392505050565b600060208284031215610c3257600080fd5b813563ffffffff81168114610c1957600080fd5b600060208284031215610c5857600080fd5b81356fffffffffffffffffffffffffffffffff81168114610c1957600080fd5b600060208284031215610c8a57600080fd5b5035919050565b600060208284031215610ca357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610c1957600080fd5b600181811c90821680610cdb57607f821691505b60208210811415610d15577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220a0bf5de76643e4e8aecd78938eb6314bc1d549b4aa8c6b3affc432945e7940a664736f6c63430008090033";

type RateConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RateConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Rate__factory extends ContractFactory {
  constructor(...args: RateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Rate";
  }

  deploy(
    _owner: string,
    _name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Rate> {
    return super.deploy(_owner, _name, overrides || {}) as Promise<Rate>;
  }
  getDeployTransaction(
    _owner: string,
    _name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, _name, overrides || {});
  }
  attach(address: string): Rate {
    return super.attach(address) as Rate;
  }
  connect(signer: Signer): Rate__factory {
    return super.connect(signer) as Rate__factory;
  }
  static readonly contractName: "Rate";
  public readonly contractName: "Rate";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RateInterface {
    return new utils.Interface(_abi) as RateInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Rate {
    return new Contract(address, _abi, signerOrProvider) as Rate;
  }
}
