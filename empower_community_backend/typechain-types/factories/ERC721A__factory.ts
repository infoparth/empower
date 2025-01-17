/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721A, ERC721AInterface } from "../ERC721A";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001465380380620014658339810160408190526200003491620001df565b8151620000499060029060208501906200006c565b5080516200005f9060039060208401906200006c565b5050600080555062000286565b8280546200007a9062000249565b90600052602060002090601f0160209004810192826200009e5760008555620000e9565b82601f10620000b957805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e9578251825591602001919060010190620000cc565b50620000f7929150620000fb565b5090565b5b80821115620000f75760008155600101620000fc565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013a57600080fd5b81516001600160401b038082111562000157576200015762000112565b604051601f8301601f19908116603f0116810190828211818310171562000182576200018262000112565b816040528381526020925086838588010111156200019f57600080fd5b600091505b83821015620001c35785820183015181830184015290820190620001a4565b83821115620001d55760008385830101525b9695505050505050565b60008060408385031215620001f357600080fd5b82516001600160401b03808211156200020b57600080fd5b620002198683870162000128565b935060208501519150808211156200023057600080fd5b506200023f8582860162000128565b9150509250929050565b600181811c908216806200025e57607f821691505b602082108114156200028057634e487b7160e01b600052602260045260246000fd5b50919050565b6111cf80620002966000396000f3fe6080604052600436106100dd5760003560e01c80636352211e1161007f578063a22cb46511610059578063a22cb46514610231578063b88d4fde14610251578063c87b56dd14610264578063e985e9c51461028457600080fd5b80636352211e146101dc57806370a08231146101fc57806395d89b411461021c57600080fd5b8063095ea7b3116100bb578063095ea7b31461017e57806318160ddd1461019357806323b872dd146101b657806342842e0e146101c957600080fd5b806301ffc9a7146100e257806306fdde0314610117578063081812fc14610139575b600080fd5b3480156100ee57600080fd5b506101026100fd366004610daf565b6102da565b60405190151581526020015b60405180910390f35b34801561012357600080fd5b5061012c6103bf565b60405161010e9190610e42565b34801561014557600080fd5b50610159610154366004610e55565b610451565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010e565b61019161018c366004610e97565b6104bb565b005b34801561019f57600080fd5b50600154600054035b60405190815260200161010e565b6101916101c4366004610ec1565b6105a6565b6101916101d7366004610ec1565b61082e565b3480156101e857600080fd5b506101596101f7366004610e55565b61084e565b34801561020857600080fd5b506101a8610217366004610efd565b610859565b34801561022857600080fd5b5061012c6108db565b34801561023d57600080fd5b5061019161024c366004610f18565b6108ea565b61019161025f366004610f83565b610981565b34801561027057600080fd5b5061012c61027f366004610e55565b6109f1565b34801561029057600080fd5b5061010261029f36600461107d565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260076020908152604080832093909416825291909152205460ff1690565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061036d57507f80ac58cd000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b806103b957507f5b5e139f000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600280546103ce906110b0565b80601f01602080910402602001604051908101604052809291908181526020018280546103fa906110b0565b80156104475780601f1061041c57610100808354040283529160200191610447565b820191906000526020600020905b81548152906001019060200180831161042a57829003601f168201915b5050505050905090565b600061045c82610a9c565b610492576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060009081526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60006104c68261084e565b90503373ffffffffffffffffffffffffffffffffffffffff821614610525576104ef813361029f565b610525576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff87811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60006105b182610adc565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610618576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082815260066020526040902080543380821473ffffffffffffffffffffffffffffffffffffffff88169091141761068b57610655863361029f565b61068b576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff85166106d8576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156106e357600082555b73ffffffffffffffffffffffffffffffffffffffff86811660009081526005602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019055918716808252919020805460010190554260a01b177c0200000000000000000000000000000000000000000000000000000000176000858152600460205260409020557c020000000000000000000000000000000000000000000000000000000083166107cb57600184016000818152600460205260409020546107c95760005481146107c95760008181526004602052604090208490555b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b61084983838360405180602001604052806000815250610981565b505050565b60006103b982610adc565b600073ffffffffffffffffffffffffffffffffffffffff82166108a8576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff1660009081526005602052604090205467ffffffffffffffff1690565b6060600380546103ce906110b0565b33600081815260076020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61098c8484846105a6565b73ffffffffffffffffffffffffffffffffffffffff83163b156109eb576109b584848484610b8d565b6109eb576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60606109fc82610a9c565b610a32576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610a4960408051602081019091526000815290565b9050805160001415610a6a5760405180602001604052806000815250610a95565b80610a7484610d12565b604051602001610a85929190611104565b6040516020818303038152906040525b9392505050565b60008054821080156103b95750506000908152600460205260409020547c0100000000000000000000000000000000000000000000000000000000161590565b600081600054811015610b5b576000818152600460205260409020547c01000000000000000000000000000000000000000000000000000000008116610b59575b80610a9557507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01600081815260046020526040902054610b1d565b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f150b7a0200000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290610be8903390899088908890600401611133565b602060405180830381600087803b158015610c0257600080fd5b505af1925050508015610c50575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610c4d9181019061117c565b60015b610cc4573d808015610c7e576040519150601f19603f3d011682016040523d82523d6000602084013e610c83565b606091505b508051610cbc576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050949350505050565b606060a06040510180604052602081039150506000815280825b600183039250600a81066030018353600a900480610d4957610d4e565b610d2c565b508190037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909101908152919050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610dac57600080fd5b50565b600060208284031215610dc157600080fd5b8135610a9581610d7e565b60005b83811015610de7578181015183820152602001610dcf565b838111156109eb5750506000910152565b60008151808452610e10816020860160208601610dcc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610a956020830184610df8565b600060208284031215610e6757600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610e9257600080fd5b919050565b60008060408385031215610eaa57600080fd5b610eb383610e6e565b946020939093013593505050565b600080600060608486031215610ed657600080fd5b610edf84610e6e565b9250610eed60208501610e6e565b9150604084013590509250925092565b600060208284031215610f0f57600080fd5b610a9582610e6e565b60008060408385031215610f2b57600080fd5b610f3483610e6e565b915060208301358015158114610f4957600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060808587031215610f9957600080fd5b610fa285610e6e565b9350610fb060208601610e6e565b925060408501359150606085013567ffffffffffffffff80821115610fd457600080fd5b818701915087601f830112610fe857600080fd5b813581811115610ffa57610ffa610f54565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561104057611040610f54565b816040528281528a602084870101111561105957600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561109057600080fd5b61109983610e6e565b91506110a760208401610e6e565b90509250929050565b600181811c908216806110c457607f821691505b602082108114156110fe577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008351611116818460208801610dcc565b83519083019061112a818360208801610dcc565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526111726080830184610df8565b9695505050505050565b60006020828403121561118e57600080fd5b8151610a9581610d7e56fea264697066735822122025d3fc397c87493d8d282aa548dece5a69a8ed1b42cc090171305416c20d02bc64736f6c63430008090033";

type ERC721AConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721AConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721A__factory extends ContractFactory {
  constructor(...args: ERC721AConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721A";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721A> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721A>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721A {
    return super.attach(address) as ERC721A;
  }
  connect(signer: Signer): ERC721A__factory {
    return super.connect(signer) as ERC721A__factory;
  }
  static readonly contractName: "ERC721A";
  public readonly contractName: "ERC721A";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AInterface {
    return new utils.Interface(_abi) as ERC721AInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721A {
    return new Contract(address, _abi, signerOrProvider) as ERC721A;
  }
}
