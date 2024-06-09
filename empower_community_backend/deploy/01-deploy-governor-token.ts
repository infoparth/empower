import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { TOKEN_COLLECTION_NAME, TOKEN_COLLECTION_SYMBOL, DAO_NAME } from "../helper-functions"
import verify from "../helper-verify"
import { networkConfig, developmentChains, accountArray } from "../helper-hardhat-config"
import { ethers } from "hardhat"
import { log } from "console"

const deployGovernanceToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const accountNonce = await ethers.provider.getTransactionCount(deployer, "latest")
  log(`---------------Deployer, ${deployer}---------------`)
  log("----------------------------------------------------")
  log("Deploying GovernanceToken and waiting for confirmations...")
  const governanceToken = await deploy("GovernanceToken", {
    from: deployer,
    args: [TOKEN_COLLECTION_NAME, TOKEN_COLLECTION_SYMBOL, DAO_NAME],
    log: true,
    nonce: accountNonce,
    // we need to wait if on a live network so we can verify properly
    // waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  })
  if (developmentChains.includes(network.name)) {
    await verify(governanceToken.address, [TOKEN_COLLECTION_NAME, TOKEN_COLLECTION_SYMBOL, DAO_NAME])
  }
  log(`deployer`, deployer)
  log(`DAO NFT Token at ${governanceToken.address}`)
  // log(`Minting to ${accountArray}`)
  // await mintToken(governanceToken.address, deployer, accountArray)
  // log("Minted!")
  // log(`Delegating to ${accountArray}`)
  // await delegate(governanceToken.address, deployer, accountArray)
  // log("Delegated!")
}

const delegate = async (
  governanceTokenAddress: string,
  owner: string,
  delegatedAccounts: string[]
) => {
  const governanceToken = await ethers.getContractAt("GovernanceToken", governanceTokenAddress)
  const size = delegatedAccounts.length

  const transactionResponse = await governanceToken.delegate(delegatedAccounts[0], {
    from: owner,
  })
  await transactionResponse.wait(1)
  // console.log(`Checkpoints: ${await governanceToken.numCheckpoints(delegatedAccount)}`)
}

const mintToken = async (governanceTokenAddress: string, owner: string, mintAccounts: string[]) => {
  const governanceToken = await ethers.getContractAt("GovernanceToken", governanceTokenAddress)
  const size = mintAccounts.length
  for (let i = 0; i < size; i++) {
    log(`The iteration number ${i}`)
    const mintRespose = await governanceToken.safeMint(mintAccounts[i], 2, { from: owner })
    await mintRespose.wait(1)
  }
}

export default deployGovernanceToken
deployGovernanceToken.tags = ["all", "governor"]
