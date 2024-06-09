const { ethers } = require("hardhat")
require("dotenv").config({ path: ".env" })
require("@nomiclabs/hardhat-etherscan")
async function main() {
  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: "0x60beA6E9e89Ff8aBe7968aE7C060d51Da9CAF41c",
    constructorArguments: [],
    // for example, if your constructor argument took an address, do something like constructorArguments: ["0xABCDEF..."],
  })
}
// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
