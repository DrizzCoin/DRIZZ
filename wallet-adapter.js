
import {
  Connection,
  PublicKey,
} from "https://cdn.skypack.dev/@solana/web3.js";

const TOKEN_ADDRESS = "8rSczAV2xeVQNGHs12WqaAK5LJUVDPjKSRcjLPXxcSH";
const THRESHOLD = 250;
const RPC_ENDPOINT = "https://api.mainnet-beta.solana.com";

window.addEventListener("load", () => {
  const provider = window.solana;

  provider?.on("connect", async () => {
    try {
      const walletAddress = provider.publicKey.toString();
      const connection = new Connection(RPC_ENDPOINT);

      const accounts = await connection.getParsedTokenAccountsByOwner(
        new PublicKey(walletAddress),
        {
          programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
        }
      );

      const drizzAccount = accounts.value.find(
        (acc) => acc.account.data.parsed.info.mint === TOKEN_ADDRESS
      );

      const amount = drizzAccount?.account?.data?.parsed?.info?.tokenAmount?.uiAmount || 0;

      if (amount >= THRESHOLD) {
        document.getElementById("access-blocker")?.style?.display = "none";
        console.log("✅ Access granted");
      } else {
        document.getElementById("access-blocker")?.style?.display = "flex";
        console.warn("⛔ Not enough DRIZZ tokens");
      }

    } catch (err) {
      console.error("Token verification failed:", err);
      document.getElementById("access-blocker")?.style?.display = "flex";
    }
  });
});
