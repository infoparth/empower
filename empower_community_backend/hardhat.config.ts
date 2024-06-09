import "@typechain/hardhat"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-ethers"
import "hardhat-gas-reporter"
import dotenv from "dotenv"
import "solidity-coverage"
import "hardhat-deploy"
import { HardhatUserConfig } from "hardhat/config"
// import "@nomicfoundation/hardhat-verify"

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const PRIVATE_KEY = process.env.PRIVATE_KEY || ""

const POLYGONSCAN_API_KEY = process.env.POLYGON_SCAN_API_KEY || ""

const config: HardhatUserConfig = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
      // blockGasLimit: 600000000000 // Network block gasLimit
    },
    polygon_mainnet: {
      url: "https://polygon-rpc.com",
      accounts: [PRIVATE_KEY],
      // gas: 1800000000000, //2100000
      // gasPrice: 1800000000000,
    },
    polygonAmoy: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 20000,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
}

export default config
