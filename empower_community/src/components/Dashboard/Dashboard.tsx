import React from "react";
import { Button } from "@/components/ui/button";
import { useReadContract, useActiveAccount } from "thirdweb/react";
import { Governor } from "@/constants/Constant";

const Dashboard: React.FC = () => {
  const wallet = useActiveAccount();
  const walletAddress = wallet?.address || "";
  const { data: lastProposalId } = useReadContract({
    contract: Governor,
    method: "s_lastProposal",
  });

  // const { data: totalProposals } = useReadContract({
  //   contract: Governor,
  //   method: "activeProposals",
  // });

  const { data: totalVotes } = useReadContract({
    contract: Governor,
    method: "userVotes",
    params: [walletAddress],
  });
  const redirect = () => {
    window.open("https://www.tally.xyz/gov/empowering-communities", "_blank");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#c9def4] to-[#b8a4c9]">
      <div className="text-center">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={redirect}
        >
          Go to DAO
        </Button>
        <p className="text-lg mt-4">
          The last Proposal Id is:{" "}
          <span className="font-bold">{lastProposalId?.toString()}</span>
        </p>

        <p className="text-lg mt-4">
          Your Total Votes are:{" "}
          <span className="font-bold">{totalVotes?.toString()}</span>
        </p>
        <p className="text-lg mt-4">
          Your wallet address is:{" "}
          <span className="font-bold">{walletAddress}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
