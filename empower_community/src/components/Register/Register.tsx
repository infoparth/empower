import { Button } from "@/components/ui/button";
import { prepareContractCall, sendAndConfirmTransaction } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { Contract } from "@/constants/Constant";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [amount, setAmount] = useState<string>("0");
  const [transactionReciept, setTransactionReciept] = useState();
  const wallet = useActiveAccount();
  console.log("Wallet is " + wallet);
  const walletAddress = wallet?.address || "";
  const nftNo = parseInt(amount);
  console.log("amount: " + nftNo);
  const totalAmountToBeSent = nftNo * 1500 * 10 ** 9;
  const value: bigint = BigInt(totalAmountToBeSent);
  console.log("the value is " + value);

  const buy = async () => {
    if (!wallet) {
      alert("Wallet not Connected");
    }
    const transaction = await prepareContractCall({
      contract: Contract,
      method: "safeMint",
      params: [walletAddress, BigInt(nftNo)],
    });
    if (transaction !== undefined && wallet) {
      const _transactionReceipt = await sendAndConfirmTransaction({
        account: wallet,
        transaction: transaction,
      });

      setTransactionReciept(_transactionReceipt);
    } else {
      console.log("Transaction not found");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen h-screen bg-gradient-to-br from-[#c9def4] to-[#b8a4c9]">
      <Label htmlFor="input" className="text-lg mb-4">
        Select the Number of NFTs you wanna buy
      </Label>
      <div className="flex items-center space-x-4 mb-4">
        <Select value={amount} onValueChange={(e) => setAmount(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select NFT Number" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button onClick={buy}>Click To Buy</Button>
      </div>
      {transactionReciept && <Badge>Transaction Success</Badge>}
    </div>
  );
}
