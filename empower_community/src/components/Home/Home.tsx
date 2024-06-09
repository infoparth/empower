import React, { useState, useEffect } from "react";
import {
  ConnectButton,
  useReadContract,
  useActiveAccount,
} from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { client, Contract } from "../../constants/Constant";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [balance, setBalance] = useState<bigint>();
  const navigate = useNavigate();
  const wallets = [
    inAppWallet(),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
  ];

  const account = useActiveAccount();
  const walletAddress = account?.address || "";

  const { data: value, isLoading } = useReadContract({
    contract: Contract,
    method: "balanceOf",
    params: [walletAddress],
  });

  useEffect(() => {
    setBalance(value);
    connectedWallet();
  }, [value, balance]);

  console.log("balance: " + balance);

  const connectedWallet = () => {
    if (balance !== undefined && !isLoading) {
      if (balance > 0) {
        navigate("/dashboard");
      } else {
        navigate("/register");
      }
    }
    console.log("The Value is not defined");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#c9def4] to-[#b8a4c9]">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Empowering Communities
      </h1>
      <p className="text-lg mb-4">Please Connect your Wallet to proceed</p>
      <ConnectButton client={client} wallets={wallets} />
    </div>
  );
};

export default Home;
