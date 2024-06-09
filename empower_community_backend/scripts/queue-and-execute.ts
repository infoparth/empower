import { ethers, network } from "hardhat"
import {
  FUNC,
  NEW_STORE_VALUE,
  PROPOSAL_DESCRIPTION,
  MIN_DELAY,
  developmentChains,
} from "../helper-hardhat-config"

const deployer = "0x0aBCaDe3C4cB5f2F1e6b192A2bf2DB2b4E442205"

export async function queueAndExecute() {
  const args = [NEW_STORE_VALUE]
  const functionToCall = FUNC
  const rate = await ethers.getContractAt("test", "0x25A22BEBe286Ffe19B5cd34c3fD4e29B478180e3") //"0xbcbB1EfFda2D3C82c794312eE45DB66A846e716B")
  const encodedFunctionCall = rate.interface.encodeFunctionData(functionToCall)
  const descriptionHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(PROPOSAL_DESCRIPTION))
  // could also use ethers.utils.id(PROPOSAL_DESCRIPTION)

  const governor = await ethers.getContractAt(
    "GovernorContract",
    "0x7F5a4Dc5aab42a95Ef425E1ECb6F3F52F07C6c77"
  )
  console.log("Queueing...")
  const queueTx = await governor.queue([rate.address], [0], [encodedFunctionCall], descriptionHash)
  console.log("The queue transactoin is:", queueTx.hash)
  // await queueTx.wait(1)

  // if (developmentChains.includes(network.name)) {
  //   await moveTime(MIN_DELAY + 1)
  //   await moveBlocks(1)
  // }

  console.log("Executing...")
  // this will fail on a testnet because you need to wait for the MIN_DELAY!
  const executeTx = await governor.execute(
    [rate.address],
    [0],
    [encodedFunctionCall],
    descriptionHash
  )
  await executeTx.wait(1)
  console.log(`value executed`)
  console.log(`rate value: ${await rate.retrieve()}`)
}

queueAndExecute()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
