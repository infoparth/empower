# HCS_DAO

### This repo contains the code for HCS DAO.

Explore the scripts folder, to run various scripts to fetch and write data on the blockchain.

Update the address section in the scripts

```
npx hardhat run scripts/<scripy_name>.ts --network polygon_mumbai

```

### steps to configure DAO 

# 1 - file 'helper-functions.ts' , use it to update the respective fields below 

export const TOKEN_COLLECTION_NAME = "Empower Community "

export const TOKEN_COLLECTION_SYMBOL = "ECT"

export const DAO_NAME = "EC_DAO"


# 2 - run command

npm run compile 

this should complie all are smart contracts and artifacts ready to be deployed

'Solidity compilation finished successfully' --> this log message denotes that it worked as expected

# 3 - run command according to env

npm run deploy-testnet --> for dev deploy on testnet

npm run deploy-mainnet --> for production , deploy on main net

if success, view the logs for respective key-values need to be entered in admin panel of Dashboard

for same values running the command again does not publish a new contract . if values are changed then hard hat will publish a new contract