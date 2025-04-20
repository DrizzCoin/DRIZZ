import { Connection, PublicKey } from "@solana/web3.js";

export const DRIZZ_MINT = new PublicKey("8rSczAV2xeVQVNGHs12WqaAK5LJUDVPjKSRcjLPXxcSH");
const SOLANA_RPC = "https://api.mainnet-beta.solana.com"; // Or your preferred RPC

export async function getDrizzTokenBalance(wallet: PublicKey): Promise<number> {
  const connection = new Connection(SOLANA_RPC);
  const tokens = await connection.getParsedTokenAccountsByOwner(wallet, {
    mint: DRIZZ_MINT,
  });

  const tokenInfo = tokens.value[0]?.account?.data?.parsed?.info;
  return tokenInfo?.tokenAmount?.uiAmount || 0;
}
