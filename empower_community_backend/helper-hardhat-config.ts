export interface networkConfigItem {
  ethUsdPriceFeed?: string
  blockConfirmations?: number
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
  localhost: {},
  hardhat: {},
  polygon_mumbai: {
    blockConfirmations: 2,
  },
  polygon_mainnet: {
    blockConfirmations: 2,
  },
  polygonAmoy: {
    blockConfirmations: 2,
  },
}

// export const accountArray = [
//   "0x4fE333470b78C5896178780aa9483bc8F6085418",
//   "0xBf11cAF613085066028C2ea7c35B9b792cDA48b8",
//   "0x7057466420B99F697340cCD551E3c510181558C5",
// ]

export const accountArray = [
  "0x0aBCaDe3C4cB5f2F1e6b192A2bf2DB2b4E442205",
  "0x0310114F5fF6271f809c81Dc0278A93FC44Ed4b2",
  "0xbEeF6335052e672680D3D73dc4129535820bD141",
]

export const developmentChains = ["hardhat", "polygon_mumbai"]
export const proposalsFile = "proposals.json"

// Governor Values
export const QUORUM_PERCENTAGE = 4 // Need 4% of voters to pass

//Average blocktime in polygon blockchain is 2 seconds
export const MIN_DELAY = 100 // 3 minutes   // 43200 // 1 days
// export const VOTING_PERIOD = 45818 // 1 week - how long the vote lasts. This is pretty long even for local tests
export const VOTING_PERIOD = 300 // 10 minutes   // 216000 // 5 days
export const VOTING_DELAY = 60 // 2 mins  // 86400 // 2 days
export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000"

export const NEW_STORE_VALUE = 8
export const FUNC = "changeValue"
export const PROPOSAL_DESCRIPTION = "This Proposal will change the value to 0"
