import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useState } from "react";
import { getDrizzTokenBalance } from "../../utils/solanaUtils";

export const WalletGate = ({ children }: { children: React.ReactNode }) => {
  const { publicKey, connected } = useWallet();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (connected && publicKey) {
      getDrizzTokenBalance(publicKey).then(balance => {
        setHasAccess(balance >= 10);
      });
    }
  }, [connected, publicKey]);

  if (!connected) return <p className="text-center">🔐 Connect wallet to access DRIZZVIA.</p>;
  if (!hasAccess) return <p className="text-center">⛔ You need at least 10 DRIZZ to play.</p>;

  return <>{children}</>;
};
