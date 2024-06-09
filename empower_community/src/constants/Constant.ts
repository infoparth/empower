import { ThirdwebClient, createThirdwebClient, getContract } from "thirdweb";
import { polygonAmoy } from "thirdweb/chains";
import { abi } from "./TokenABI";
import { gov_abi } from "./GovernorABI";
import { escrow_abi } from "./EscrowABI";

const clientId = <YOUR THIRDWEB CLIENT_ID HERE>;

export const tokenAddress = "0xA4cB4498F14Eb7350739ea5c769F442fDD7EF0e2"; 

export const governorAddress = "0x7F5a4Dc5aab42a95Ef425E1ECb6F3F52F07C6c77";

export const escrowAddress = "0x86F8ab32D935B1F99d74119fA2eeAA0be1A620dc";

export const client: ThirdwebClient = createThirdwebClient({
  clientId: clientId,
});

export const chain = polygonAmoy;

export const Contract = getContract({
  client: client,
  chain: polygonAmoy,
  address: tokenAddress,
  abi: abi,
});

export const Governor = getContract({
  client: client,
  chain: polygonAmoy,
  address: governorAddress,
  abi: gov_abi,
});

export const Escrow = getContract({
  client: client,
  chain: polygonAmoy,
  address: escrowAddress,
  abi: escrow_abi,
});

