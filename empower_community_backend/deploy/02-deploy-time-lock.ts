import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../helper-verify"
import { networkConfig, developmentChains, MIN_DELAY } from "../helper-hardhat-config"
import { DAO_NAME } from "../helper-functions"

const deployTimeLock: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  log("----------------------------------------------------")
  log("Deploying TimeLock and waiting for confirmations...")
  const timeLock = await deploy("TimeLock", {
    from: deployer,
    /**
     * Here we can set any address in admin role also zero address.
     * previously In tutorial deployer has given admin role then
     * renounced as well. in later section so we are doing the same by giving admin role to
     * deployer and then renounced to keep the tutorial same.
     */
    args: [MIN_DELAY, [], [], deployer, DAO_NAME],
    log: true,
    // we need to wait if on a live network so we can verify properly
    // waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  })

  if (developmentChains.includes(network.name)) {
    await verify(timeLock.address, [MIN_DELAY, [], [], deployer, DAO_NAME])
  }
  log(`TimeLock Contract at ${timeLock.address}`)
}
export default deployTimeLock
deployTimeLock.tags = ["all", "timelock"]
