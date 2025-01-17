/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Box, BoxInterface } from "../Box";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
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
        name: "oldrDTI",
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
        name: "newrateOfInterest",
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
    inputs: [],
    name: "LTV",
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
    name: "retrieveLTV",
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
    name: "retrieveRate",
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
    name: "retrieveTotalPreApprovedLoans",
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
        name: "newrateOfInterest",
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
  "0x608060405234801561001057600080fd5b50604051610ccc380380610ccc83398101604081905261002f916100ad565b6100383361005d565b600180546001600160a01b0319166001600160a01b03929092169190911790556100dd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100bf57600080fd5b81516001600160a01b03811681146100d657600080fd5b9392505050565b610be0806100ec6000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80637963e50f116100e3578063b272839a1161008c578063dc881c4c11610066578063dc881c4c14610402578063defdfae61461042a578063f2fde38b1461043d57600080fd5b8063b272839a1461038b578063b9e9c7bc146103a5578063d5f39488146103e257600080fd5b80638da5cb5b116100bd5780638da5cb5b146103315780639dcf8241146103705780639ee9c1d11461038357600080fd5b80637963e50f146102f957806381a389791461030c578063867dec1a1461031f57600080fd5b80633bfb8ee51161014557806362965d8e1161011f57806362965d8e146102b2578063715018a6146102de57806375734cb5146102e657600080fd5b80633bfb8ee514610264578063491bb08114610279578063619e6ccc1461028c57600080fd5b806324779e291161017657806324779e291461020457806325f5a8e01461022e5780633824e75c1461025b57600080fd5b806304d2775514610192578063178d8ae3146101c7575b600080fd5b60015474010000000000000000000000000000000000000000900463ffffffff165b6040519081526020015b60405180910390f35b6001546101ef9074010000000000000000000000000000000000000000900463ffffffff1681565b60405163ffffffff90911681526020016101be565b6001547801000000000000000000000000000000000000000000000000900463ffffffff166101b4565b6002546102429067ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016101be565b6101b460045481565b610277610272366004610ad2565b610450565b005b610277610287366004610b03565b6104d3565b6002546801000000000000000090046fffffffffffffffffffffffffffffffff166101b4565b6001546101ef907801000000000000000000000000000000000000000000000000900463ffffffff1681565b610277610563565b6102776102f4366004610b29565b610577565b610277610307366004610b5b565b61064c565b61027761031a366004610b29565b6106d2565b60025467ffffffffffffffff166101b4565b60005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101be565b61027761037e366004610b03565b610796565b6004546101b4565b6003546fffffffffffffffffffffffffffffffff166101b4565b6003546103c1906fffffffffffffffffffffffffffffffff1681565b6040516fffffffffffffffffffffffffffffffff90911681526020016101be565b60015461034b9073ffffffffffffffffffffffffffffffffffffffff1681565b6002546103c1906801000000000000000090046fffffffffffffffffffffffffffffffff1681565b610277610438366004610b74565b61082d565b61027761044b366004610b74565b610925565b6104586109dc565b6002805467ffffffffffffffff8381167fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000083168117909355604080519190921680825260208201939093527f11b7e12bc7ba69838b4508dbaa630616d7d791f065b494e02002ad9b91c0b20e91015b60405180910390a15050565b6104db6109dc565b6001805463ffffffff838116740100000000000000000000000000000000000000008181027fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff85161790945560408051918252939092041660208201819052917f2597e6d1348e47ad5a08a8304cdd26bddeb8e697547f54397719be5e5637b0d691016104c7565b61056b6109dc565b6105756000610a5d565b565b60015473ffffffffffffffffffffffffffffffffffffffff1633146105fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f7420416c6c6f77656400000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600280546fffffffffffffffffffffffffffffffff90921668010000000000000000027fffffffffffffffff00000000000000000000000000000000ffffffffffffffff909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff1633146106cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f7420416c6c6f77656400000000000000000000000000000000000000000060448201526064016105f4565b600455565b60015473ffffffffffffffffffffffffffffffffffffffff163314610753576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f7420416c6c6f77656400000000000000000000000000000000000000000060448201526064016105f4565b600380547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055565b61079e6109dc565b6001805463ffffffff83811678010000000000000000000000000000000000000000000000008181027fffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffffff85161790945560408051949093049091168084526020840191909152917fae97aa11c94649dc81938b01ef9b5bc13a481058d2a3a637dde62fb7f16d9ae991016104c7565b60015473ffffffffffffffffffffffffffffffffffffffff1633146108ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f7420416c6c6f77656400000000000000000000000000000000000000000060448201526064016105f4565b6001805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907fb425bf30023a30c35ee17f3f416360da7ea96a46b589cfa6a14f39dc98a52bca90600090a35050565b61092d6109dc565b73ffffffffffffffffffffffffffffffffffffffff81166109d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105f4565b6109d981610a5d565b50565b60005473ffffffffffffffffffffffffffffffffffffffff163314610575576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105f4565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610ae457600080fd5b813567ffffffffffffffff81168114610afc57600080fd5b9392505050565b600060208284031215610b1557600080fd5b813563ffffffff81168114610afc57600080fd5b600060208284031215610b3b57600080fd5b81356fffffffffffffffffffffffffffffffff81168114610afc57600080fd5b600060208284031215610b6d57600080fd5b5035919050565b600060208284031215610b8657600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610afc57600080fdfea26469706673582212204ed2f21a4daaf457b6424cfbceae56a4b0221bf904b04e72f1fcad89cef003b064736f6c63430008090033";

type BoxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Box__factory extends ContractFactory {
  constructor(...args: BoxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Box";
  }

  deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Box> {
    return super.deploy(_owner, overrides || {}) as Promise<Box>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  attach(address: string): Box {
    return super.attach(address) as Box;
  }
  connect(signer: Signer): Box__factory {
    return super.connect(signer) as Box__factory;
  }
  static readonly contractName: "Box";
  public readonly contractName: "Box";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxInterface {
    return new utils.Interface(_abi) as BoxInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Box {
    return new Contract(address, _abi, signerOrProvider) as Box;
  }
}
