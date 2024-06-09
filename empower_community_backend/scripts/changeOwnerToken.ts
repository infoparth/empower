import { ethers, network } from "hardhat"

const tokenAddr = "0x9CC1Ad5a6eEEc42F5A18E791427D6F34238C6Def" // "0x523631B132b0087B358Af6074Fc9920458E841d2";
const addr = "0x86F8ab32D935B1F99d74119fA2eeAA0be1A620dc" //"0xBf11cAF613085066028C2ea7c35B9b792cDA48b8"
export async function changeOwner() {
  const token = await ethers.getContractAt("GovernanceToken", tokenAddr)

  console.log(`prev owner: ${await token.owner()}`)

  const transferTx = await token.transferOwnership(addr)

  console.log(`new owner: ${await token.owner()}`)
}

changeOwner()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
