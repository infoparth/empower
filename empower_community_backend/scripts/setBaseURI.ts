import { ethers, network } from "hardhat"
import { ON_CHAIN_USA_TOKEN } from "../contract-addess"

const tokenAddr = ON_CHAIN_USA_TOKEN
const baseURI = "ipfs://Qme4irhWzpLxbCUB5FsTPQkMcrojVPuWLKJGJ6WVtDk8uN"
const owner = "0x4fE333470b78C5896178780aa9483bc8F6085418"

export async function setURI() {
  const token = await ethers.getContractAt("GovernanceToken", tokenAddr)

  console.log(
    `Setting the base URI of the NFT token, so that people can see the NFT in their wallet`
  )

  // const set = await token.setBaseURI(baseURI, {
  //   from: owner,
  // })

  const view = await token.tokenURI(1)

  console.log(`Base URI set! ${view}`);
}

setURI()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
