import { ethers, network } from "hardhat"
import { ON_CHAIN_USA_TOKEN } from "../contract-addess"

const tokenAddr = ON_CHAIN_USA_TOKEN
const owner = "0x4fE333470b78C5896178780aa9483bc8F6085418"
const address = "0x4fE333470b78C5896178780aa9483bc8F6085418"
const tokenCount = 5

export async function setURI() {
  const token = await ethers.getContractAt("GovernanceToken", tokenAddr)

  console.log(`Minting tokens to the Owner Wallet...`)

  const set = await token.safeMint(address, tokenCount, {
    from: owner,
  })

  console.log(`Token Mined!`)
}

setURI()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
