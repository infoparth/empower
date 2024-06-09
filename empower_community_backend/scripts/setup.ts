import { ethers, network } from "hardhat"
import { ON_CHAIN_USA_GOVERNOR, ON_CHAIN_USA_TIMELOCK } from "../contract-addess"
import { ADDRESS_ZERO } from "../helper-hardhat-config"

const g_address = ON_CHAIN_USA_GOVERNOR
const t_Addr = ON_CHAIN_USA_TIMELOCK

export async function setupTimelock() {
  console.log(`TimeLock at ${t_Addr}`)
  console.log(`Governor at ${g_address}`)

  const governor = await ethers.getContractAt("GovernorContract", g_address)
  const timeLock = await ethers.getContractAt("TimeLock", t_Addr)

  const proposerRole = await timeLock.PROPOSER_ROLE()
  const executorRole = await timeLock.EXECUTOR_ROLE()

  try {
    console.log("Setting up the first one")
    const proposerTx = await timeLock.grantRole(proposerRole, g_address)
    await proposerTx.wait(6)
    console.log("Setting up the second one")
    const executorTx = await timeLock.grantRole(executorRole, ADDRESS_ZERO)
    await executorTx.wait(6)

    //check timlock for permissions
    // const revokeTx = await timeLock.revokeRole(adminRole, deployer)
    // await revokeTx.wait(1)
    // Guess what? Now, anything the timelock wants to do has to go through the governance process!
  } catch (err) {
    console.error(err)
  }
}

setupTimelock()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
